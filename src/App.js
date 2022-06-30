import "./App.css";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NewBoardForm from "./components/NewBoardForm";
import Board from './components/Board';


function App() {
  const [boardsData, setBoardsData] = useState([]);

  const URL = 'http://localhost:5000/boards';
  //https://dashboard.heroku.com/apps/get-inspired-c17
  
  const [selectedBoard, setSelectedBoard] = useState(
    [
      {
        id: 1,
        title: "first board",
        owner: "get inspired",
      },
      {
        id: 2,
        title: "second board",
        owner: "Vida",
      },
    ]
  );

  useEffect(() => {
    axios
    .get(URL)
    .then((response) => {
      setBoardsData(response.data);
    })
  }, []);

  const selectBoard = (board) => { setSelectedBoard(board) };
  const boardsItems = boardsData.map((board) => {
    return (<li>
      <Board board={board} onBoardSelect={selectBoard}></Board>
    </li>)
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <body>
        <section className="box-container">
        <div>
          <h2>Boards</h2>
          <ol className="board-list">
            {boardsItems}
          </ol>
        </div>
        <div className="selected-board">
          <h2>Selected Boards</h2>
          <p>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'Select a Board from the Board List!'} </p>
        </div>
        <div className="New-board">
          <h2>Create a New Board</h2>
          <NewBoardForm />
        </div>
        </section>
      </body>
    </div>
  );
}

export default App;
