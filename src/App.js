import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Board from "./components/Board";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";
import CardForm from "./components/CardForm";
import CardList from "./components/CardList";

function App() {
  const [boards, setBoards] = useState([]);
  const URL = "https://peaceful-shelf-16152.herokuapp.com/";

  const getBoards = () => {
    axios.get(`${URL}/boards`).then((res) => {
      const newBoards = res.data.map((board) => {
        return {
          id: board.board_id,
          title: board.title,
          owner: board.owner,
        };
      });
      setBoards(newBoards);
    });
  };

  const addBoard = (boardData) => {
    axios
      .post(`${URL}/boards`, boardData)
      .then(getBoards())
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
          <h2>Boards</h2>
          <BoardList boards={boards} />
        </div>
        <h2>Selected Board</h2>
        <Board />
        <h2>Cards for Pick-Me-Up Quotes</h2>
        <CardList />
        <h2>Create a New Board</h2>
        <BoardForm addBoardCallback={addBoard} />
        <h2>Create a New Card</h2>
        <CardForm />
      </main>
    </div>
  );
}

export default App;
