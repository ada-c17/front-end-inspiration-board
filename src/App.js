import { useState, useEffect } from "react";
import axios from "axios";
import Board from "./components/Boards.js";
import Header from "./components/Header.js";
import Cards from "./components/Cards.js";
import "./App.css";
import "./components/Boards.css";

function App() {
  const [isOnHomepage, setIsOnHomepage] = useState(true);
  const [activeBoard, setActiveBoard] = useState({});
  const [cards, setCards] = useState([]);
  const [boards, setBoards] = useState([]);
  const [updating, setUpdating] = useState(false);

  const deleteCard = (id) => {
    /* Find and remove card with give id from list of cards */
    // const cards = activeBoard.cards;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].card_id === id) {
        cards.splice(i, 1);
      }
    }
    /* Update number of cards so that React will see change */

    /* Delete card in the back end */
    axios
      .delete(`https://shiver-of-sharks.herokuapp.com/cards/${id}`)
      .then((response) => {
        setCards([...cards]);
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  };

  const deleteBoard = (id) => {
    console.log(`deleteBoard: Deleting Board ${id}`);
    /* Find and remove board with give id from list of boards */

    for (let i = 0; i < boards.length; i++) {
      if (boards[i].board_id === id) {
        boards.splice(i, 1);
      }
    }
    /* Update number of boards so that React will see change */
    setBoards([...boards]);

    /* Delete board in the back end */
    axios
      .delete(`https://shiver-of-sharks.herokuapp.com/boards/${id}`)
      .then((response) => {})
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  };

  useEffect(() => {
    axios
      .get("https://shiver-of-sharks.herokuapp.com/boards")
      .then((response) => {
        console.log("api call");
        setBoards(response.data.boards);
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  }, [cards]);

  const addBoardData = (newBoard) => {
    setUpdating(false);
    axios
      .post("http://shiver-of-sharks.herokuapp.com/boards", {
        title: newBoard.titleData,
        owner: newBoard.ownerData,
      })
      .then((response) => {
        setBoards([...boards, response.data.board]);
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  };

  const addCardData = (newCard) => {
    setUpdating(false);
    axios
      .post("https://shiver-of-sharks.herokuapp.com/cards", {
        message: newCard.messageData,
        board_id: newCard.boardId,
      })
      .then((response) => {
        console.log("success");
        setCards([...cards, response.data.card]);
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  };

  const refreshCards = (id, newCount) => {
    const newCards = cards.map((card) => {
      return card.card_id === id ? { ...card, likes_count: newCount } : card;
    });
    setCards(newCards);
  };

  if (isOnHomepage) {
    return (
      <div className="container" id="App">
        <div>
          <Header title="Inspiration Board" isOnHomepage={isOnHomepage} />
          <Board
            boards={boards}
            setActiveBoard={setActiveBoard}
            setIsOnHomepage={setIsOnHomepage}
            isOnHomepage={isOnHomepage}
            setCards={setCards}
            deleteBoardCallBack={deleteBoard}
            addBoardCallback={addBoardData}
            updating={updating}
            setUpdating={setUpdating}
          ></Board>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container" id="App">
        <div>
          <Header
            title={activeBoard.title}
            isOnHomepage={isOnHomepage}
            setIsOnHomepage={setIsOnHomepage}
          />
          <Cards
            cards={cards}
            deleteCardCallBack={deleteCard}
            addCardCallback={addCardData}
            boardId={activeBoard.board_id}
            updating={updating}
            setUpdating={setUpdating}
            setCards={setCards}
            refreshCards={refreshCards}
          />
        </div>
      </div>
    );
  }
}

export default App;
