import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Board } from "./components/Board";
import BoardDropDown from "./components/BoardDropDown";
import { CreateCard } from "./components/CreateCard";
import CreateBoard from "./components/CreateBoard";

function App() {
  // const [boardData, setBoardData] = useState([]);

  // useEffect(() => {
  //   axios
  //   .get("http://127.0.0.1:5000/boards")
  //   .then((response) =>
  //     setBoardData(response.data)
  //   )
  // }, []);

  return (
    <div id="App">
      <header>
        <h1>Inspo Board</h1>
        <Board id="1" title="Board" owner="Sana"></Board>
      </header>
    </div>
  );
}

export default App;
