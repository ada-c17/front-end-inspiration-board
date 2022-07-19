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

// this could all go in a separate apiCalls.js folder or something

function App() {
  const [boardData, setBoardData] = useState([]);
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

  const selectBoard = (boardId) => {
    const selectedBoard = selectBoardAsync(boardId);
    return (
      <Board
        title={selectedBoard.title}
        creator={selectedBoard.creator}
        cards={selectedBoard.cards}
      />
    );
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
    <main className="App">
      <h1>Inspiration Board</h1>
      <BoardList boards={boardData} selectBoard={selectBoard} />
      <NewBoardForm onBoardSubmit={handleNewBoard} />
      {/* We probably only want to show when a board is selected */}
      <NewCardForm onCardSubmit={handleNewCard} />
    </main>
  );
}

export default App;
