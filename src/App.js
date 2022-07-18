import React, { useState } from "react";
import "./App.css";
import BoardList from "./components/BoardList";
import Board from "./components/Board";

function App() {
  const [display, setDisplay] = useState(null);

  const toggleDisplay = () => {
    console.log("If/Else func - Switch between BoardList & Board");
    if (display) {
      return <Board board_id="{display}" />;
    } else {
      return <BoardList />;
    }
  };

  const changeDisplay = ({ setBoardCallback }) => {
    console.log("This will update setDisplay");
    // setDisplay(setBoardCallback) NOTE: setBoardCallback == board_id
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Inspotters</p>
      </header>
      {/* <main>{toggleDisplay()}</main> */}
      {/* NOTE: DELETE LINES 31-34 ONCE changeDisplay() FUNC IS COMPLETE */}
      <main>
        <BoardList />
        <Board board_id="2" />
      </main>
      <footer>
        ©2022 C17 Otters students: Jodi D., Elaine S., Tori S., Andrea G.Z.
      </footer>
    </div>
  );
}

export default App;
