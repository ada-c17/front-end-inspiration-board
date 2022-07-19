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
  const [display, setDisplay] = useState(2);

  // const toggleDisplay = () => {
  //   console.log("If/Else func - Switch between BoardList & Board");
  //   if (display) {
  //     return <Board board_id="{display}" />;
  //   } else {
  //     return <BoardList />;
  //   }
  // };
  //
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

  return (
    <div className="App">
      <header className="App-header">
        <p>Inspotters</p>
      </header>
      {/* <main>{toggleDisplay()}</main> */}
      {/* NOTE: DELETE LINES 31-34 ONCE changeDisplay() FUNC IS COMPLETE */}
      <main>
        <NewCardForm submitFunction={newCard} />
        <BoardList changeBoardCallback={changeDisplay} />
        <NewBoardForm submitFunction={newBoard} />
        <Board board_id={display} />
        {/* <CardList />
        <Card message="We got this y'all" /> */}
      </main>
      <footer>
        ©2022 C17 Otters students: Jodi D., Elaine S., Tori S., Andrea G.Z.
      </footer>
    </div>
  );
}

export default App;
