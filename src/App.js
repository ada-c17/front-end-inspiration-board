import "./App.css";
import Board from "./components/boards.js";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import SingleBoard from "./components/SingleBoard.js";
import axios from "axios";

function App() {
  const [isOnHomepage, setIsOnHomepage] = useState(true);
  const [activeBoard, setActiveBoard] = useState({});
  const [boards, getBoards] = useState([]);
  useEffect(() => {
    axios
      .get("http://shiver-of-sharks.herokuapp.com/boards")
      .then((response) => {
        getBoards(response.data.boards);
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  }, []);
  if (isOnHomepage) {
    return (
      <div>
        <div>
          <Header title="Inspiration Board" isOnHomepage={isOnHomepage} />
          <Board
            boards={boards}
            setActiveBoard={setActiveBoard}
            setIsOnHomepage={setIsOnHomepage}
            isOnHomepage={isOnHomepage}
          ></Board>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Header
          title={activeBoard.title}
          isOnHomepage={isOnHomepage}
          setIsOnHomepage={setIsOnHomepage}
        />
        <SingleBoard
          board={activeBoard}
          setActiveBoard={setActiveBoard}
          setIsOnHomepage={setIsOnHomepage}
        ></SingleBoard>
      </>
    );
  }
}

export default App;
