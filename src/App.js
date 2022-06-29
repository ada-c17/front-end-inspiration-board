import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BoardList from "./components/BoardList";

const boardData = [
  {
    board_id: 1,
    title: "Mow the lawn",
    owner: "Ada",
  },
  {
    board_id: 2,
    title: "Cook Pasta",
    owner: "Ada",
  },
  {
    board_id: 3,
    title: "Eat Pasta",
    owner: "Jeannie"
  }
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

    <main className="App">
      <h1>Inspiration Board</h1>
      <BoardList boardData={boardData}
        cardData={cardData} />
    </main>
  );
};

export default App;
