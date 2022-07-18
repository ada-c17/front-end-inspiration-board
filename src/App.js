import { useState } from "react";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import BoardList from "./components/BoardList";
import axios from "axios";
import Board from "./components/Board";

// this could all go in a separate apiCalls.js folder or something

const kBaseUrl = "https://in5piration-board.herokuapp.com/";

const postBoardAsync = (boardData) => {
  const requestBody = { ...boardData };

  return axios
    .post(`${kBaseUrl}/boards`, requestBody)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error("error posting board");
    });
};

const postCardAsync = (cardData) => {
  const requestBody = { ...cardData };
  // need to extract board id somehow: not like this
  const boardId = cardData.boardId;

  return axios
    .post(`${kBaseUrl}/boards/${boardId}/cards`, requestBody)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error("error posting board");
    });
};

// API call (patch) to update likeCount for a single card
const likeCardAsync = (cardId) => {};

// API call (delete) to delete card by id
const deleteCardAsync = (cardId) => {};

const selectBoardAsync = (boardId) => {
  return axios
    .get(`${kBaseUrl}/boards/${boardId}`)
    .then((response) => {
      return response.data
  })
    .catch((error) => {
      console.log(`${error.data}`)
  });
}

const selectBoard = (boardId) =>{
  const selectedBoard = selectBoardAsync(boardId);

  return <Board title={selectedBoard.title}
          creator={selectedBoard.creator}
          cards={selectedBoard.cards}
          />
}

function App() {
  const [boardData, setBoardData] = useState([]);
  const [cardData, setCardData] = useState([]);
  // sample boards data to test BoardList
  const boardSet = [
    { title: "Memes", creator: "Michael Scott" },
    { title: "Inspirational Quotes", creator: "Dwight Schrute" },
    { title: "Romance Advice", creator: "Kelly Kapoor" },
  ];

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
      <BoardList boards={boardSet} selectBoard={selectBoard} />
      <NewBoardForm onBoardSubmit={handleNewBoard} />
      {/* We probably only want to show when a board is selected */}
      <NewCardForm onCardSubmit={handleNewCard} />
    </main>
  );
}

export default App;
