import "./App.css";
import Board from "./components/Board";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [boards, setBoards] = useState([])
    
  const URL = "https://inspiration-board-eota.herokuapp.com/boards";

    const fetchBoards = () => {
      axios
      .get(URL)
      .then((res) => {
        const newBoards = res.data.map((board) => {
          return {
            board_id: board.board_id,
            title: board.title,
            owner: board.owner,
          }
        })
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
    };

  useEffect(fetchBoards, []);
  

  const deleteBoard = (id) => {
    console.log("hello")
    const newBoards = [];
    for (const board of boards) {
      if (board.board_id !== id) {
        newBoards.push(board);
      }
    }
    setBoards(newBoards);
  }
  return (
    <div className="App">
      <div className="App-wrapper">
        <header className="App-header">Inspiration Board</header>
        <main className="Main">
          <div className="Boards">
            <BoardList boards={boards} deleteBoard={deleteBoard} />
            <section className="Board-form">
              <BoardForm />
            </section>
          </div>
          <div className="Board-display"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
