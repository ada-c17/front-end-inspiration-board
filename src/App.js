import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";

function App() {
  const [boards, setBoards] = useState([]);
  const URL = "https://peaceful-shelf-16152.herokuapp.com/";

  const defaultBoard = {
    title: "",
    owner: "",
    id: 0,
  };

  const [selectedBoard, setSelectedBoard] = useState(defaultBoard);
  const [cards, setCards] = useState([]);
  const [boardFormHidden, setBoardFormHidden] = useState(false);
  const [cardListAndFormHidden, setCardListAndFormHidden] = useState(true);
  const [cardListOrder, setCardListOrder] = useState("id");

  const cardOrder = (order_by) => {
    setCardListOrder(order_by);
  };

  const iDCardOrder = () => {
    cardOrder("id");
  };

  const alphaCardOrder = () => {
    cardOrder("message");
  };

  const likesCardOrder = () => {
    cardOrder("likes");
  };

  const setBoardFormVisibility = () => {
    setBoardFormHidden(!boardFormHidden);
  };

  const selectBoard = (id) => {
    for (const board of boards) {
      if (board.id === id) {
        setSelectedBoard(board);
      }
    }

    if (id !== 0) {
      setCardListAndFormHidden(false);
    }

    getCards();
  };

  const getBoards = () => {
    axios.get(`${URL}/boards`).then((res) => {
      const newBoards = res.data.map((board) => {
        return {
          id: board.board_id,
          title: board.title,
          owner: board.owner,
        };
      });
      setBoards(newBoards);
    });
  };

  const addBoard = (boardData) => {
    axios
      .post(`${URL}/boards`, boardData)
      .then(() => {
        getBoards();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBoard = (boardId) => {
    axios
      .delete(`${URL}/boards/${boardId}`)
      .then((response) => {
        getBoards();
        getCards();
        setSelectedBoard(defaultBoard);
        setCardListAndFormHidden(true);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCards = () => {
    axios
      .get(`${URL}/cards`, {
        params: {
          board_id: selectedBoard.id,
        },
      })
      .then((res) => {
        const newCards = res.data.map((card) => {
          return {
            id: card.card_id,
            message: card.message,
            board_id: card.board_id,
            likes: card.likes_count,
          };
        });
        setCards(newCards);
      });
  };

  const addCard = (cardData) => {
    axios
      .post(`${URL}/cards`, cardData)
      .then(() => {
        getCards();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCard = (cardId) => {
    axios
      .delete(`${URL}/cards/${cardId}`)
      .then((response) => {
        getCards();
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const likeCard = (cardId) => {
    axios
      .patch(`${URL}/cards/${cardId}/like`)
      .then((response) => {
        getCards();
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getBoards, []);
  useEffect(getCards, [selectedBoard]);

  return (
    <div className="App">
      <header>
        <h1>Eggplant Parmesan Inspiration Board</h1>
      </header>
      <main>
        <section className="board-container">
          <h2>Boards</h2>
          <BoardList
            boards={boards}
            selectBoardCallback={selectBoard}
            deleteBoardCallback={deleteBoard}
          />
        </section>

        <section className="selected-board-container">
          <h2>Selected Board</h2>
          <p id="selected-board">
            {selectedBoard.title} - {selectedBoard.owner}
          </p>
        </section>

        <section className="board-form-container">
          <h2>Create a New Board</h2>
          {boardFormHidden ? null : <BoardForm addBoardCallback={addBoard} />}
          <button onClick={setBoardFormVisibility}>
            {boardFormHidden ? "Show Board Form" : "Hide Board Form"}
          </button>
        </section>

        <section hidden={cardListAndFormHidden}>
          <h2>Cards for {selectedBoard.title}</h2>
          <button onClick={iDCardOrder}>Sort by ID</button>
          <button onClick={alphaCardOrder}>Sort alphabetically</button>
          <button onClick={likesCardOrder}>Sort by Likes</button>
          <div className="cards-container">
            <CardList
              cards={cards}
              deleteCardCallback={deleteCard}
              likeCardCallback={likeCard}
              cardListOrder={cardListOrder}
            />
          </div>
        </section>

        <section className="card-form-container" hidden={cardListAndFormHidden}>
          <h2>Create a New Card</h2>
          <CardForm addCardCallback={addCard} board_id={selectedBoard.id} />
        </section>
      </main>
    </div>
  );
}

export default App;
