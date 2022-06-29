import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

// const boardData = [
//   {
//     board_id: 1,
//     title: "Mow the lawn",
//     owner: "Ada",
//     cards: [1, 3],
//   },
//   {
//     board_id: 2,
//     title: "Cook Pasta",
//     owner: "Ada",
//     cards: [2],
//   },
// ];

// const cardData = [
//   {
//     card_id: 1,
//     message: "Eat Your Dinner",
//     likes_count: 0,
//   },
//   {
//     card_id: 2,
//     message: "Go To Bed Early",
//     likes_count: 1,
//   },
// ];

const URL = "https://back-end-inspiration-board.herokuapp.com/boards";

const App = () => {
  const [boardData, setBoardData] = useState();

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        const newTasks = res.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.is_complete,
          };
        });
        setStatus("Loaded");
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoardList boardData={boardData} />} />
        <Route
          path="/boards/:boardId"
          element={
            <Board
              boardData={boardData}
              cardData={cardData}
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
