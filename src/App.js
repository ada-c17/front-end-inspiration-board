import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

const URL = "https://back-end-inspiration-board.herokuapp.com/boards";

const App = () => {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        const newBoardData = response.data.map((board) => {
          return {
            boardId: board.board_id,
            title: board.title,
            owner: board.owner,
            cards: board.cards,
          };
        });
        setBoardData(newBoardData);
        console.log(boardData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(boardData);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoardList boardData={boardData} />} />
        <Route
          path="/boards/:boardId"
          element={
            <Board
              boardData={boardData}
              // cardData={cardData}
              likeHeart={faHeart}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
