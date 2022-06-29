import "./App.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Board from "./components/Board";
import Card from "./components/Card";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";
import CardForm from "./components/CardForm";

function App() {
  const [boards, setBoards] = useState([]);
  const URL = 'https://peaceful-shelf-16152.herokuapp.com/';

  const getBoards= () => {
    axios
      .get(`${URL}/boards`)
      .then((res) => {
        const newBoards = res.data.map((board) => {
          return {
            id: board.board_id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getBoards, []);
  
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <div>
          <BoardList
            boards={boards}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
