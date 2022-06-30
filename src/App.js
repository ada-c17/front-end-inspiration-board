import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm";
import BoardsList from "./components/BoardsList";
import HideForm from "./components/HideForm";

function App() {
  const selectedBoardData = {
    id: null,
    title: "",
    owner: "",
  };

  // keeping stracking on board state
  const [boards, setBoards] = useState([]);
  // keeping tracking on showing or hiding form state
  const [displayForm, setDisplayForm] = useState(true);
  // keeping tracking on selected board state
  const [boardSelected, setBoardSelected] = useState(selectedBoardData);
  const URL = "https://get-inspired-c17.herokuapp.com/boards";

  // get all boards from DB
  const fetchBoards = () => {
    axios
      .get(URL)
      .then((response) => {
        const newBoards = response.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoards(newBoards);
      })
      .catch((error) => {
        alert("Oop! Could not access the boards!");
      });
  };

  // rendering and showing data once
  useEffect(fetchBoards, []);

  // adding board
  const addBoard = (boardInfo) => {
    axios
      .post(URL, boardInfo)
      .then((res) => {
        if (boardInfo.title && boardInfo.owner) {
          fetchBoards();
        } else {
          alert("Oop! Missing title or owner!");
        }
      })
      .catch((err) => {
        alert("Oop! Could not add the board!");
      });
  };

  // function to show or hide the form by click
  const flipDisplayForm = () => {
    setDisplayForm(!displayForm);
  };

  // showing selected board
  const selectedBoard = (id) => {
    const newBoards = [...boards];
    for (const board of newBoards) {
      if (board.id === id) {
        setBoardSelected(board);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <div>
        <div className="board">
          <h2>Boards</h2>
          <div className="boards-list">
            <BoardsList
              boardsList={boards}
              selectedBoardCallBack={selectedBoard}
            />
          </div>
        </div>
        <div className="selected-board">
          <h2>Selected Boards</h2>
          <div>
            {boardSelected.id
              ? `${boardSelected.title} - ${boardSelected.owner}`
              : "Select a Board from the Board List!"}
          </div>
        </div>
        <div className="New-board">
          <h2>Create a New Board</h2>
          {displayForm ? (
            <NewBoardForm
              addBoardCallBack={addBoard}
              flipFormCallBack={flipDisplayForm}
            />
          ) : (
            <HideForm flipFormCallBack={flipDisplayForm} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
