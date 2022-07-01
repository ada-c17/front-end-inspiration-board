import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Boards from "./Components/Boards";
import NewBoardForm from "./Components/NewBoardForm";
import CardsList from "./Components/CardsList";

function App() {
  const [boardsData, setBoards] = useState([]);
  const [cardsData, setCards] = useState([]);

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
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Can't get cards.", error);
      });
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

      <div className="container">
        {/* <div className="board-and-card-flex"> */}
        <div className="board-wrapper">
          <Boards boards={boardsData} onClickGetCards={getCardsForBoard} />
        </div>
        <div className="cards-wrapper">
          <CardsList cards={cardsData} onClickDeleteCard={deleteCard} />
        </div>
        {/* </div> */}
        <div className="new-board-form">
          <NewBoardForm handleSubmission={makeNewBoard} />
        </div>
      </div>
    </div>
  );
}

export default App;
