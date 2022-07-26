import "./App.css";
import { React, useState, useEffect } from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import NewBoard from "./routes/newBoard";
import BoardDisplay from "./routes/ChosenBoard";
import axios from "axios";

function App() {
  const [boardData, setBoardData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState([]);

  const getBoards = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        console.log(response.data);
        const dbBoards = response.data.map((board) => {
          const { boardId, title, owner } = board;
          return { boardId, title, owner };
        });
        setBoardData(dbBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBoards();
  }, []);

  // POST request
  const onAddBoard = ({ owner, title }) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, { owner, title })
      .then(() => {
        getBoards();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //updates state for newly selected board from drop-down menu.
  const selectNewBoard = (e) => {
    const boardId = e.target.value;
    const newSelectedBoard = boardData.filter(
      (board) => board.boardId == boardId
    );
    console.log(newSelectedBoard);
    setSelectedBoard(newSelectedBoard[0]);
  };

  //displays board choices on drop down
  const boardOptions = boardData.map((board) => {
    return (
      <option key={board.boardId} value={board.boardId}>
        {board.title}
      </option>
    );
  });

  return (
    <Router>
      <header>
        <h1 className="App-title">Inspiration Board</h1>
        <nav className="routes">
          <Link to="/create" className="choose-board">
            {" "}
            Create an Inspiration Board
          </Link>
          <Link to="/">Home</Link>
          <Link to="/allboards" className="choose-board">
            <section>Inspiration board</section>
            <select onChange={selectNewBoard}>
              <option>Choose an inspiration board</option>
              {boardOptions}
            </select>
          </Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/create"
          element={<NewBoard addBoardCallback={onAddBoard} />}
        />
        <Route
          path="/allboards"
          element={<BoardDisplay selectedBoard={selectedBoard} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
