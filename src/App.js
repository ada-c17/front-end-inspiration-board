import "./App.css";
import { React, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import NewBoard from "./routes/newBoard";
import BoardDisplay from "./routes/ChosenBoard";

//sample data if GET request made to endpoint /boards
//get all cards will only render boardID, title, owner
const boards = [
  {
    boardId: 1,
    title: "Let's go Whoodles!",
    cards: [{ cardId: 1, message: "I love dogs!", likesCount: 1 }],
  },
  {
    boardId: 2,
    title: "Let's go Sheepydoodles!",

    cards: [
      { cardId: 1, message: "I love pups!", likesCount: 1 },
      { cardId: 1, message: "I love pups!", likesCount: 1 },
    ],
  },
];

function App() {
  const [boardData, setBoardData] = useState(boards);

  //make initial value of selectedBoard null in future?
  const [selectedBoard, setSelectedBoard] = useState(boards[0]);

  //will need to change this to Axios call for POST one board
  const addBoardData = (newBoardData) => {
    const newBoardList = [...boardData];

    // Logic to generate the next valid board ID- will delete once we make our Axios calls b/c db will generate this
    const nextId = Math.max(...newBoardList.map((board) => board.boardId)) + 1;

    newBoardList.push({
      boardId: nextId,
      owner: newBoardData.owner,
      title: newBoardData.title,
    });

    setBoardData(newBoardList);
  };

  //updates state for newly selected board from drop-down menu. I don't love that it comes from "title" and not "boardId"
  const selectNewBoard = (e) => {
    const boardTitle = e.target.value;
    const newSelectedBoard = boardData.filter(
      (board) => board.title === boardTitle
    );
    console.log(newSelectedBoard);
    setSelectedBoard(newSelectedBoard);
  };

  //displays board choices on drop down
  const boardOptions = boardData.map((board) => {
    return (
      <option key={board.boardId} boardId={board.boardId}>
        {board.title}
      </option>
    );
  });

  return (
    // <div className="App">
    <Router>
      <header>
        <h1 className="App-title">Inspiration Board</h1>
        <nav className="routes">
          <Link to="/create" className="choose-board">
            {" "}
            Create an Inspiration Board
          </Link>
          <Link to="/"> Home </Link>
          <Link to="/boards" className="choose-board">
            <section>Inspiration board</section>
            <select onChange={selectNewBoard}>
              {/* <option>Choose an inspiration board</option>
              <option> {selectedBoard.title}</option>
              <option> board 2</option> */}
              {boardOptions}
            </select>
          </Link>
        </nav>
      </header>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route
          path="/create"
          element={<NewBoard addBoardCallback={addBoardData} />}
        />
        <Route
          path="/boards"
          element={<BoardDisplay selectedBoard={selectedBoard} />}
        />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
