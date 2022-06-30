import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm";
import BoardsList from "./components/BoardsList";
import HideForm from "./components/HideForm";
import SelectedBoard from "./components/SelectedBoard";
const selectedBoardData = {
  id: "",
  title: "",
  owner: "",
};
function App() {
  const [boards, setBoards] = useState([]);
  const [displayForm, setDisplayForm] = useState(true);
  const [boarSelected, setBoardSelected] = useState(selectedBoardData);
  const URL = "https://get-inspired-c17.herokuapp.com/boards";

  // get all boards from DB
  const fetchBoard = () => {
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
  useEffect(fetchBoard, []);

  // adding board
  const addBoard = (boardInfo) => {
    axios
      .post(URL, boardInfo)
      .then((res) => {
        fetchBoard();
      })
      .catch((err) => {
        alert("Oop! Could not add the board!");
      });
  };

  const flipDisplayForm = () => {
    setDisplayForm(!displayForm);
  };

  const selectedBoard = (id) => {
    console.log(`before selected board: ${boarSelected}`);
    const newBoards = [...boards];
    const newSelectedBoard = newBoards.filter((board) => board.id === id);
    setBoardSelected(newSelectedBoard);
  };

  console.log(`after selected board: ${boarSelected}`);
  //setBoardSelected(selectedBoardData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <div>
      <section className="box-container">
        <div className="board">
          
          <h2>Boards</h2>
          <div>
            <BoardsList
              boardsList={boards}
              selectedBoardCallBack={selectedBoard}
            />
          </div>
        </div>
        <div className="selected-board">
          <h2>Selected Boards</h2>
          <SelectedBoard
            title={boarSelected.title}
            owner={boarSelected.owner}
          />
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
        </section>
      </div>
    </div>
    
  );
}

export default App;
