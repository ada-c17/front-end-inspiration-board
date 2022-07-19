import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Board } from "./components/Board";
import { BoardDropDown } from "./components/BoardDropDown";
import { CardDropDown } from "./components/CardDropDown";
import { CreateBoard } from "./components/CreateBoard";
import { CreateCard } from "./components/CreateCard";

function App() {
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState();

  const getBoards = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/boards`);
      return response.data;
    } catch (err) {
      return [];
    }
  };

  const updateBoards = (board) => {
    const boardIdx = boards.findIndex((each) => each.id === board.id);
    const nextBoards = [...boards];
    nextBoards[boardIdx] = board;
    setBoards(nextBoards);
    if (selectedBoard) setSelectedBoard(board);
  };

  const onCreateCallBack = (boardId, card) => {
    if (boardId === selectedBoard?.id) {
      console.log("card created:", card, boardId);
      const cards = selectedBoard.cards ?? [];
      cards.push(card);
      updateBoards({ ...selectedBoard, cards });
    }
  };

  const onCreateBoardCallBack = (board) => {
    console.log("board created:", board);
    setBoards((prv) => [...prv, board]);
  };

  useEffect(() => {
    getBoards().then((res) => {
      setBoards(res);
    });
  }, []);

  return (
    <div id="App" style={{ display: "flex", flexDirection: "column" }}>
      <header>
        <h1>Inspo Board</h1>
      </header>
      <div style={{ display: "flex", gap: 20, justifyContent: "flex-start" }}>
        <BoardDropDown
          boards={boards}
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
        />
        <Board board={selectedBoard} />
        <CreateBoard onCreateCallBack={onCreateBoardCallBack} />
      </div>
      <div style={{ display: "flex", gap: 20 }}>
        <CardDropDown cards={selectedBoard?.cards} />
        <CreateCard
          boardId={selectedBoard?.id}
          onCreateCallBack={onCreateCallBack}
        />
      </div>
    </div>
  );
}

export default App;
