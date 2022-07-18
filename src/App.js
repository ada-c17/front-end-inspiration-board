import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Boards from "./Components/Boards";
import NewBoardForm from "./Components/NewBoardForm";
import CardsList from "./Components/CardsList";
import CardForm from "./Components/CardForm";
// import { response } from "express";

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
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
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
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Can't get cards.", error);
      });

    for (let board of boardsData) {
      if (board.board_id === board_id) {
        setBoardName(board.title);
      }
    }
    // return board_id;
  };

  //creates new card for selected board

  const createNewCardForSelectedBoard = (data, board_id) => {
    axios
      .post(
        `https://inspirational-board.herokuapp.com/boards/${selectedBoard}/cards`,
        data
      )
      .then((response) => {
        getCardsForBoard(selectedBoard);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error, "create card failed.");
      });
  };

  const setLikesForCardId = (id) => {
    const newCardsData = cardsData.map((card) => {
      const newCard = { ...card };
      console.log(newCard.card_id === id);
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
  return (
    <div>
      <header>
        <h3>Inspirational Boards by Beastly Raptors</h3>
      </header>

      <div className="selected-bord-name">
        <h4>You selected board "{selectedBoardName}"</h4>
      </div>

      <div className="container">
        <div>
          <Boards
            boards={boardsData}
            selectedBoardId={selectedBoard}
            onClickGetCards={getCardsForBoard}
          />
        </div>
        <div>
          <CardsList
            cards={cardsData}
            onClickDeleteCard={deleteCard}
            onLikeClick={setLikesForCardId}
          />
        </div>
        <div className="forms-container">
          <div className="new-board-form">
            <NewBoardForm handleSubmission={makeNewBoard} />
          </div>
          <div className="card-submit-form">
            {<CardForm handleFormSubmission={createNewCardForSelectedBoard} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
