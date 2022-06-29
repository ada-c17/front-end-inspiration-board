import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";

function App() {
  const URL = "https://gramtaschie.herokuapp.com/boards";
  const [boards, setBoards] = useState([]);

  const fetchBoards = () => {
    axios
      .get(URL)
      .then((response) => {
        console.log("fetchBoard request");
        console.log(response.data);
        const updatedBoards = response.data;
        console.log(updatedBoards);
        setBoards(updatedBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => fetchBoards, []);

  return (
    <div>
      <header>
        <h1>Inspiration Board</h1>
        <Board boards={boards} fetchBoardsCallback={fetchBoards}></Board>
      </header>
    </div>
  );
}

export default App;
