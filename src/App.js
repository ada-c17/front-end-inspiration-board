import { useState, useEffect } from "react";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import BoardList from "./components/BoardList";
import axios from "axios";
import Board from "./components/Board";
import {
  postBoardAsync,
  postCardAsync,
  likeCardAsync,
  deleteCardAsync,
  selectBoardAsync,
  getAllBoardsAsync,
} from "./apiCalls";
import "./App.css";

// this could all go in a separate apiCalls.js folder or something

function App() {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoardData, setSelectedBoardData] = useState({
    title: "",
    creator: "",
    boardId: null,
  });
  const [cardData, setCardData] = useState([]);
  // sample boards data to test BoardList
  // const boardSet = [
  //   { title: "Memes", creator: "Michael Scott", id: 1 },
  //   { title: "Inspirational Quotes", creator: "Dwight Schrute", id: 2 },
  //   { title: "Romance Advice", creator: "Kelly Kapoor" , id: 3},
  // ];

  const displayAllBoards = () => {
    getAllBoardsAsync()
      .then((boards) => {
        setBoardData(boards);
      })
      .catch((err) => {
        console.log(err);
        throw new Error("error displaying boards");
      });
  };

  useEffect(() => {
    displayAllBoards();
  }, [boardData]);

  const selectBoard = (board) => {
    setSelectedBoardData(board);
  };

  const postBoard = (boardData) => {
    postBoardAsync(boardData)
      .then((newBoard) => {
        setBoardData((oldData) => [...oldData, newBoard]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const postCard = (cardData) => {
    postCardAsync(cardData)
      .then((newCard) => {
        setCardData((oldData) => [...oldData, newCard]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // these seem kind of unecessary to me
  const handleNewBoard = (formFields) => {
    postBoard(formFields);
  };

  const handleNewCard = (formFields) => {
    postCard(formFields);
  };

  return (
    <div className="App">
      <header>
        <h1>in5piration board</h1>
      </header>

      <main>
        <section id="call-to-action">
          <h2>
            Need a little inspiration? Create a new board or select a board
            below!
          </h2>
        </section>

        <BoardList boards={boardData} selectBoard={selectBoard} />
        {/* ternary to check if theres is board selected*/}
        <p>
          {selectedBoardData.boardId ? (
            <Board
              id={selectedBoardData.boardId}
              title={selectedBoardData.title}
              creator={selectedBoardData.creator}
            ></Board>
          ) : (
            ""
          )}
        </p>
      </main>

      <NewBoardForm onBoardSubmit={handleNewBoard} />
      {/* We probably only want to show when a board is selected */}
      <NewCardForm onCardSubmit={handleNewCard} />
    </div>
  );
}

export default App;
