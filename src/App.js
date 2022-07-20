import "./App.css";
import "./components/boards.css";
import Board from "./components/boards.js";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Cards from "./components/cards.js";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm.js";
import NewCardForm from "./components/NewCardForm.js";

function App() {
  const [isOnHomepage, setIsOnHomepage] = useState(true);
  const [activeBoard, setActiveBoard] = useState({});
  const [cards, setCards] = useState([]);
  const [boards, getBoards] = useState([]);

  const deleteCard = (id) => {
    /* Find and remove card with give id from list of cards */
    // const cards = activeBoard.cards;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].card_id === id) {
        cards.splice(i, 1);
      }
    }
    /* Update number of cards so that React will see change */
    setCards([...cards]);

    /* Delete card in the back end */
    axios
      .delete(`http://shiver-of-sharks.herokuapp.com/cards/${id}`)
      .then((response) => {
        /* Don't need to do anything with response */
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  };

  useEffect(() => {
    axios
      .get("http://shiver-of-sharks.herokuapp.com/boards")
      .then((response) => {
        getBoards(response.data.boards);
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  }, []);

  const addBoardData = (newBoard) => {
    axios
      .post("http://shiver-of-sharks.herokuapp.com/boards", {
        title: newBoard.titleData,
        owner: newBoard.ownerData,
      })
      .then((response) => {
        getBoards([...boards, response.data.board]);
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  };

  const addCardData = (newCard) => {
    axios
      .post("http://shiver-of-sharks.herokuapp.com/cards", {
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
          ></Board>
        </div>
        <NewBoardForm addBoardCallback={addBoardData} />
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
          <Cards activeBoard={activeBoard} deleteCardCallBack={deleteCard} />
        </div>
      </div>
    );
  }
}

export default App;
