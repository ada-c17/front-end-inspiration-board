import "./App.css";
import Board from "./components/boards.js";
import { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Card from "./components/cards.js";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm.js";

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

  const addBoardData = (newBoard) => {
    axios
      .post("http://shiver-of-sharks.herokuapp.com/boards", {
        title: newBoard.titleData,
        owner: newBoard.ownerData,
      })
      .then((response) => {
        getBoards([...boards, response.data.board]);
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  };

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
        <NewBoardForm addBoardCallback={addBoardData} />
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
        <Card activeBoard={activeBoard} />
      </>
    );
  }
}

export default App;
