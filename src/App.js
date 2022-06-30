import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import {Board} from "./components/Board";
import BoardDropDown from "./components/BoardDropDown";
import CreateCard from "./components/CreateCard";
import CreateBoard from "./components/CreateBoard";

function App() {
  return (
    <div id="App">
      <header>
        <h1>Inspo Board</h1>

        <Board title="Board" owner="Sana"></Board>
      </header>
    </div>
  );
}

export default App;
