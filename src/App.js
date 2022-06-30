import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import BoardList from "./components/BoardList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//  yarn add react-router-dom@6
// yarn add @fortawesome/free-regular-svg-icons


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
    //Router component 
    //Routes - Determine where in your router system do you want to have routes 
    //Route = main page of website -> 
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BoardList />} />
          {/* <Route path="/board_id" element={<Board />} /> */}
          <Route path="/boards/<board_id>" element={<BoardList />} />
        </Routes>
      </Router>
      <BoardList
        boardData={boardData}
        cardData={cardData}
        likeHeart={faHeart}
      />
    </div>
  );
};

export default App;