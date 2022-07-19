import "./App.css";
import Board from "./components/boards.js";
import { useState, useEffect } from "react";
import SingleBoard from "./components/SingleBoard.js";
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
    // Duplicate the student list
    // Logic to generate the next valid student ID

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
          <h1>Inspiration Board</h1>
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
    // return(<div></div>)
    return (
      <SingleBoard
        board={activeBoard}
        setActiveBoard={setActiveBoard}
        setIsOnHomepage={setIsOnHomepage}
      ></SingleBoard>
    );
  }
}

export default App;
