import "./App.css";
import Board from "./components/Board";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";
import { useState } from "react";

function App() {
  const [boards, setBoards] = useState([
    { board_id: 1, title: "pick-me-up", owner: "Ada" },
    { board_id: 2, title: "notes to code to", owner: "Ada" },
  ]);

  const deleteBoard = (id) => {
    console.log("hello");
    const newBoards = [];
    for (const board of boards) {
      if (board.board_id !== id) {
        newBoards.push(board);
      }
    }
    setBoards(newBoards);
  };

  const addBoard = (boardInfo) => {
    console.log("hellooo");
    const newBoards = [];
    newBoards.push({ boardInfo });
    setBoards(newBoards);
  };

  return (
    <div className="App">
      <div className="App-wrapper">
        <header className="App-header">Inspiration Board</header>
        <main className="Main">
          <div className="Boards">
            <BoardList boards={boards} deleteBoard={deleteBoard} />
            <section className="Board-form">
              <BoardForm addBoard={addBoard} />
            </section>
          </div>
          <div className="Board-display"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
