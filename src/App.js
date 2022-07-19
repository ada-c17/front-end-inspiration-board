import "./App.css";
import React from "react";
import BoardsList from "./components/BoardsList";
import axios from "axios";
import { useEffect, useState } from "react";
import BoardWithCards from "./components/BoardWithCards";
// import CardForm from "./components/CardForm";
import BoardForm from "./components/BoardForm";

function App() {
  const [boards, setBoards] = useState([]);

  const BOARDS_URL = "https://fast-caverns-05936.herokuapp.com/boards";

  const fetchBoards = () => {
    axios
      .get(BOARDS_URL)
      .then((res) => {
        const newBoards = res.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchBoards, []);

  const addBoard = (boardInfo) => {
    axios
      .post(BOARDS_URL, boardInfo)
      .then((response) => {
        fetchBoards();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div id="Boards">
        <hi>BOARDS</hi>
        <BoardsList
          boards={boards}
        />
      </div>
      <div>
        {/* check if board is selected if board is selected show this if not don't show */}
        <BoardWithCards/>
      </div>
      <div>
        <BoardForm addBoardCallback={addBoard} />
      </div>  
      
    </div>
  );
}

export default App;
