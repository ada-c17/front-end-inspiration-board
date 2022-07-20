import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Boards from "./Components/Boards";
import NewBoardForm from "./Components/NewBoardForm";
import CardsList from "./Components/CardsList";
import CardForm from "./Components/CardForm";

function App() {
  const [boardsData, setBoards] = useState([]);
  const [cardsData, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedBoardName, setBoardName] = useState(null);

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get("https://inspirational-board.herokuapp.com/boards")
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log("Can't get boards", error);
      });
  };

  const makeNewBoard = (data) => {
    axios
      .post("https://inspirational-board.herokuapp.com/boards", data)
      .then(() => {
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log("Can't make a new Board.", error);
      });
  };

  const getCardsForBoard = (board_id) => {
    axios
      .get(`https://inspirational-board.herokuapp.com/boards/${board_id}/cards`)
      .then((response) => {
        setCards(response.data);
        setSelectedBoard(board_id);
      })
      .catch((error) => {
        console.log("Can't get cards.", error);
      });

    for (let board of boardsData) {
      if (board.board_id === board_id) {
        setBoardName(board.title);
      }
    }
  };

  const sortCardsByLikes = () => {
    const newCards = [...cardsData].sort(
      (a, b) => b.likes_count - a.likes_count
    );
    setCards(newCards);
    return newCards;
  };

  const createNewCardForSelectedBoard = (data) => {
    axios
      .post(
        `https://inspirational-board.herokuapp.com/boards/${selectedBoard}/cards`,
        data
      )
      .then((response) => {
        getCardsForBoard(selectedBoard);
      })
      .catch((error) => {
        console.log(error, "create card failed.");
      });
  };

  const setLikesForCardId = (id) => {
    const newCardsData = cardsData.map((card) => {
      const newCard = { ...card };
      if (newCard.card_id === id) {
        newCard.likes_count++;

        axios
          .patch(`https://inspirational-board.herokuapp.com/cards/${id}/like`)
          .catch((error) => {
            console.log("Can't get cards.", error);
          });
      }

      return newCard;
    });

    setCards(newCardsData);
  };

  const deleteCard = (card_id) => {
    axios
      .delete(`https://inspirational-board.herokuapp.com/cards/${card_id}`)
      .then((response) => {
        const newCards = cardsData.filter((card) => card.card_id !== card_id);
        setCards(newCards);
      })
      .catch((error) => {
        console.log("Can't delete a card.", error);
      });
  };

  const deleteBoard = (board_id) => {
    axios
      .delete(`https://inspirational-board.herokuapp.com/boards/${board_id}`)
      .then((response) => {
        const newBoards = boardsData.filter(
          (board) => board.board_id !== board_id
        );
        setBoards(newBoards);
      })
      .catch((error) => {
        console.log("Can't delete a board.", error);
      });
  };

  const [isBoardFormVisible, setBoardFormVisibility] = useState(true);
  const newBoardFormVisibility = () => {
    setBoardFormVisibility(!isBoardFormVisible);
  };

  return (
    <div>
      <header>
        <h3>Inspirational Boards by Beastly Raptors</h3>
      </header>

      <div className="container">
        <div>
          <h2>Boards</h2>
          <Boards
            boards={boardsData}
            onClickGetCards={getCardsForBoard}
            onClickDeleteBoard={deleteBoard}
          />
        </div>
        <div>
          <h2>
            {selectedBoard ? `Cards for Board "${selectedBoardName}"` : "Cards"}
          </h2>
          {selectedBoard ? (
            <button className="sort-button" onClick={sortCardsByLikes}>
              Sort by ❤️
            </button>
          ) : (
            ""
          )}
          <CardsList
            cards={cardsData}
            onClickDeleteCard={deleteCard}
            onLikeClick={setLikesForCardId}
          />
        </div>
        <div>
          <h2>Create a New Board</h2>
          {isBoardFormVisible ? (
            <NewBoardForm handleSubmission={makeNewBoard} />
          ) : (
            ""
          )}
          <button
            className="button-board-visibility"
            onClick={newBoardFormVisibility}
          >
            {isBoardFormVisible ? "Hide New Board form" : "Open New Board form"}
          </button>
        </div>
        {selectedBoard ? (
          <div>
            <h2>Create a New Card</h2>
            {<CardForm handleFormSubmission={createNewCardForSelectedBoard} />}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
