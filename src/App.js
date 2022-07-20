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
  // const handleNewBoard = (formFields) => {
  //   postBoard(formFields);
  // };

  const handleNewCard = (formFields) => {
    postCard(formFields);
  };

  return (
    <main className="container">
      <header>
        <h1>in5piration board</h1>
      </header>

      <section id="call-to-action">
        <h2>
          Need a little inspiration? Create a new board or select a board below!
        </h2>
      </section>

      <BoardList boards={boardData} selectBoard={selectBoard} />
      {/* ternary to display board if there is board selected, otherwise display create board form */}
      {selectedBoardData.boardId ? (
        <Board
          id={selectedBoardData.boardId}
          title={selectedBoardData.title}
          creator={selectedBoardData.creator}
        ></Board>
      ) : (
        <NewBoardForm onBoardSubmit={postBoard} />
      )}

      {/* <NewBoardForm onBoardSubmit={handleNewBoard} /> */}
      {/* We probably only want to show when a board is selected */}
      {/* NewCardForm may need to be moved to CardList component */}
      <NewCardForm onCardSubmit={handleNewCard} />
    </main>
  );
}

export default App;
