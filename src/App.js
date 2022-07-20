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

  const [boardID, setBoardsID] = useState(null);
  const [boardTitle, setboardTitle] = useState(null); 

  const boardSelected = (boardID, boardTitle) => {
    // console.log(boardID)
    setBoardsID(boardID)
    setboardTitle(boardTitle)
  }
  return (
    <div class = "container">  Made 
      <div >
        <div id="Boards">
          <h1>BOARDS</h1>
          <BoardsList
            boards={boards}
            boardInfoCallback={boardSelected}
          />
        </div>

        <div>
          {boardID && <BoardWithCards boardID={boardID} boardTitle = {boardTitle}/>}
        </div>

        <div>
          <BoardForm addBoardCallback={addBoard} />
        </div>  
        
      </div>
    </div>
  );
}

export default App;
