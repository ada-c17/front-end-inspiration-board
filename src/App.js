import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import BoardList from "./components/BoardList";

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
        <h1>InspOtters</h1>
      </header>
      <main>
        {toggleDisplay()}
        <div id="woodPattern"></div>
      </main>
      <footer>
        ©2022 C17 Otters students: Jodi D., Elaine S., Tori S., Andrea G.Z.
      </footer>
    </div>
  );
}

export default App;
