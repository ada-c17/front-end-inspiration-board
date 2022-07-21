
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Board } from "./components/Board";
import { BoardDropDown } from "./components/BoardDropDown";
import { CreateBoard } from "./components/CreateBoard";

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState();

  const getBoards = async () => {
    try {
      const response = await axios.get(`https://swifties-inspo-board-6.herokuapp.com/boards/`);
      return response.data;
    } catch (err) {
      return [];
    }
  };

  const onRemoveCallback = (id) => {
    const newBoards = boards.filter((board) => {
      return board.id !== id;
    });
    setBoards(newBoards);
    if (newBoards) {
      setSelectedBoard(newBoards[0]);
    }
  };

  const onCreateBoardCallBack = (board) => {
    console.log("board created:", board);
    setBoards((prv) => [...prv, board]);
  };

  useEffect(() => {
    getBoards().then((res) => {
      setBoards(res);

      if (res) {
        setSelectedBoard(res[0]);
      }
    });
  }, []);

  return (
    <div className="app" id="App">
      <header>
        <h1 className="inspo-board-header">Swifties Inspo Board</h1>
      </header>

      <div style={{ display: "flex", gap: 20, justifyContent: "flex-start" }}>
        <BoardDropDown
          boards={boards}
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
          onRemoveCallback = {onRemoveCallback}
        />
        <CreateBoard onCreateCallBack={onCreateBoardCallBack} />
      </div>

      {selectedBoard ? (
        <Board
          key={selectedBoard.id}
          id={selectedBoard.id}
          title={selectedBoard.title}
          owner={selectedBoard.owner}
        ></Board>
      ) : null}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;