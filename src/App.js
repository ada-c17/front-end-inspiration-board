import "./App.css";
import "./components/Boards.css";
import Board from "./components/Boards.js";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Cards from "./components/Cards.js";
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

  const deleteBoard = (id) => {
    console.log(`deleteBoard: Deleting Board ${id}`);
    /* Find and remove board with give id from list of boards */

    for (let i = 0; i < boards.length; i++) {
      if (boards[i].board_id === id) {
        boards.splice(i, 1);
      }
    }
    /* Update number of boards so that React will see change */
    getBoards([...boards]);

    /* Delete board in the back end */
    axios
      .delete(`http://shiver-of-sharks.herokuapp.com/boards/${id}`)
      .then((response) => {})
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
  }, [cards]);

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
            deleteBoardCallBack={deleteBoard}
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
          <Cards cards={cards} deleteCardCallBack={deleteCard} />
        </div>
        <NewCardForm
          addCardCallback={addCardData}
          boardId={activeBoard.board_id}
        />
      </div>
    );
  }
}

export default App;
