import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import BoardList from "./components/BoardList";

const boardData = [
  {
    board_id: 1,
    title: "Mow the lawn",
    owner: "Ada",
    cards: [1, 3],
  },
  {
    board_id: 2,
    title: "Cook Pasta",
    owner: "Ada",
    cards: [2],
  },
];

const cardData = [
  {
    card_id: 1,
    message: "Eat Your Dinner",
    likes_count: 0,
  },
  {
    card_id: 2,
    message: "Go To Bed Early",
    likes_count: 1,
  },
];

const App = () => {
  return (
    <div className="App">
      <BoardList
        boardData={boardData}
        cardData={cardData}
        likeHeart={faHeart}
      />
    </div>
  );
};

export default App;