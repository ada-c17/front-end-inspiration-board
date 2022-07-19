import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import axios from "axios";
import NewCardForm from "./components/NewCardForm";
import NewBoardForm from "./components/NewBoardForm";
import CardList from "./components/CardList";
import Card from "./components/Card";

function App() {
  const toggleDisplay = () => {
    console.log("If/Else func - Switch between BoardList & Board");
    if (display) {
      console.log("you have display of", display);
      return <Board board_id={display} />;
    } else {
      return <BoardList changeBoardCallback={changeDisplay} />;
    }
  };
  const [display, setDisplay] = useState(null);
  // toggleDisplay();

  const changeDisplay = ({ id }) => {
    console.log("change display", id);
    setDisplay(id);
  };

  const newCard = (card) => {
    // console.log(card);
  };

  const newBoard = (board) => {
    console.log(board);
  };

  const [testCards, setTestCards] = useState([
    {
      "card_id": 1,
      "message":"Test Card 1 (To Be Deleted)",
      "likes_count": 1
    },
    {
      "card_id": 2,
      "message":"Test Card 2 (To Be Deleted)",
      "likes_count": 0
    },
    {
      "card_id": 3,
      "message":"Test Card 3 (To Be Deleted)",
      "likes_count": 0
    },
    {
      "card_id": 4,
      "message":"Test Card 4 (To Be Deleted)",
      "likes_count": 0
    },
    {
      "card_id": 5,
      "message":"Test Card 5(To Be Deleted)",
      "likes_count": 0
    },
    {
      "card_id": 6,
      "message":"Test Card 6 (To Be Deleted)",
      "likes_count": 1
    },
    {
      "card_id": 7,
      "message":"Test Card 7 (To Be Deleted)",
      "likes_count": 0
    },
    {
      "card_id": 8,
      "message":"Test Card 8 (To Be Deleted)",
      "likes_count": 0
    },
  ])
  return (
    <div className="App">
      <header className="App-header">
        <p>Inspotters</p>
      </header>
      <main>
        {toggleDisplay()}
        <NewCardForm submitFunction={newCard} />
        {/* <BoardList changeBoardCallback={changeDisplay} /> */}
        <NewBoardForm submitFunction={newBoard} />
        {/* <Board board_id={display} /> */}
        {/* <CardList />
        <Card message="We got this y'all" /> */}
        <BoardList />
        <Board board_id="2" />
        <CardList cardsOnBoard={testCards}/>
      </main>
      <footer>
        ©2022 C17 Otters students: Jodi D., Elaine S., Tori S., Andrea G.Z.
      </footer>
    </div>
  );
}

export default App;
