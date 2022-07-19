import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import NewCardForm from "./components/NewCardForm";
import CardList from "./components/CardList";

function App() {
  const toggleDisplay = () => {
    console.log("If/Else func - Switch between BoardList & Board");
    if (display) {
      console.log("you have display of", display);
      console.log(typeof changeDisplay);
      return <Board board_id={display} changeBoardCallback={changeDisplay} />;
    } else {
      return <BoardList changeBoardCallback={changeDisplay} />;
    }
  };
  const [display, setDisplay] = useState(null);

  const changeDisplay = ({ id }) => {
    console.log("change display", id);
    setDisplay(id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Inspotters</p>
      </header>
      <main>
        {toggleDisplay()}
        <NewCardForm submitFunction={newCard} />

        {/* <CardList cardsOnBoard={testCards} /> */}
      </main>
      <footer>
        ©2022 C17 Otters students: Jodi D., Elaine S., Tori S., Andrea G.Z.
      </footer>
    </div>
  );
}

export default App;
