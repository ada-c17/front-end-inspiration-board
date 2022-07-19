import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import CardList from './components/CardList';
import cardData from './data/cardData.json';

// read the base url from .env file
// current base url connects to your local host
export const baseURL = process.env['REACT_APP_BACKEND_URL'];

const App = () => {
  // state of the board db
  const [boards, setBoards] = useState([]);

  // Get all boards when web app loads
  useEffect(() => {
    axios
      .get(`${baseURL}/boards`)
      .then((response) => {
        console.log('Boards Loaded!');
        const newBoards = response.data.map((board) => {
          return {
            title: board.title,
            id: board.id,
            owner: board.owner,
          };
        });
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log('err');
      });
  }, []);

  // state of the 'selected Board' title display
  const [selectedBoard, setSelectedBoard] = useState();
  const [boardTitle, setBoardTitle] = useState('TBD');

  const selectBoard = (board) => {
    console.log('Displaying Title!');
    setBoardTitle(board.title);
    console.log('Setting the Display ID!');
    setSelectedBoard(board.id);
    console.log(selectedBoard);
  };

  // sending API call to submit new BoardForm
  const addNewBoard = (newBoardData) => {
    axios
      .post(`${baseURL}/boards`, newBoardData)
      .then((response) => {
        console.log(response.data);
        const newBoards = [...boards];
        newBoards.push({ id: response.data.id, ...newBoardData });
        setBoards(newBoards);
      })
      .catch((error) => console.log(error));
  };

  // sending API call to delete Board - not working ATM
  const deleteBoard = (id) => {
    console.log('Test!');
    axios
      .delete(`${baseURL}/boards/${id}`)
      .then(() => {
        setBoards((oldBoards) => {
          return oldBoards.filter((board) => board.id !== id);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // toggle Board form
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(false);

  // BEAUTY
  return (
    <div>
      <header className="header">
        <h1>INSPIRATION BOARD by Team Name</h1>
      </header>
      <main>
        <h2>Selected Board: {boardTitle}</h2>
        <button
          className="button-toggle"
          onClick={() => setIsBoardFormVisible(!isBoardFormVisible)}
        >
          {isBoardFormVisible ? 'Hide Form' : 'Create Your Board'}
        </button>
        {isBoardFormVisible ? <NewBoardForm addNewBoard={addNewBoard} /> : null}
        <h2>Board List</h2>
        <BoardList
          boards={boards}
          selectBoard={selectBoard}
          deleteBoard={deleteBoard}
        />
        <CardList cardData={cardData} />
      </main>
    </div>
  );
};

export default App;
