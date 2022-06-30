import { useState } from "react";
import NewBoardForm from "./components/NewBoardForm";
import BoardList from "./components/BoardList";
import axios from "axios";

// this could all go in a separate api_calls.js folder or something

const kBaseUrl = "https://in5piration-board.herokuapp.com/";

const postBoardAsync = (catData) => {
  const requestBody = { ...catData };

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

function App() {
  const [boardData, setBoardData] = useState([]);
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

  const handleNewBoard = (formFields) => {
    postBoard(formFields);
  };

  return (
    <main className="App">
      <h1>Inspiration Board</h1>
      <BoardList boards={boardSet} />
      <NewBoardForm onBoardSubmit={handleNewBoard} />
    </main>
  );
}

export default App;
