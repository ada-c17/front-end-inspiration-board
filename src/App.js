import "./App.css";
import Board from "./components/boards.js";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Card from "./components/cards.js";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm.js";

function App() {
  const [isOnHomepage, setIsOnHomepage] = useState(true);
  const [activeBoard, setActiveBoard] = useState({});
  const [numCards, setNumCards] = useState(0);
  const [boards, getBoards] = useState([]);

  const deleteCard = (id) => {
    /* Find and remove card with give id from list of cards */
    const cards = activeBoard.cards;
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].card_id == id) {
        cards.splice(i, 1);
      }
    }
    /* Update number of cards so that React will see change */
    setNumCards(numCards - 1);
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

  if (isOnHomepage) {
    return (
      <div className="container" id="App">
        <h1>Inspiration Board</h1>
        <div>
          <Header title="Inspiration Board" isOnHomepage={isOnHomepage} />
          <Board
            boards={boards}
            setActiveBoard={setActiveBoard}
            setIsOnHomepage={setIsOnHomepage}
            isOnHomepage={isOnHomepage}
          ></Board>
        </div>
        <NewBoardForm addBoardCallback={addBoardData} />
      </div>
    );
  } else {
    return (
      <>
        <Header
          title={activeBoard.title}
          isOnHomepage={isOnHomepage}
          setIsOnHomepage={setIsOnHomepage}
        />
        <Card activeBoard={activeBoard} deleteCardCallBack={deleteCard} />
      </>
    );
  }
}

export default App;
