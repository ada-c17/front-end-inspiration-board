import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';

// read the base url from .env file
// current base url connects to your local host
export const baseURL = process.env['REACT_APP_BACKEND_URL'];

const App = () => {
  // state of the board db
  const [boards, setBoards] = useState([]);

  // Get all boards when web app loads
  // AND when a new board is added
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
  const [boardTitle, setBoardTitle] = useState('TBD');

  const displayBoardTitle = (title) => {
    setBoardTitle(title);
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

  // BEAUTY
  return (
    <div>
      <header>
        <h1>INSPIRATION BOARD by Team Name</h1>
      </header>
      <main>
        <h2>Selected Board: {boardTitle}</h2>
        <h3>Create Your Board:</h3>
        <NewBoardForm addNewBoard={addNewBoard} />
        <BoardList boards={boards} displayBoardTitle={displayBoardTitle} />
      </main>
    </div>
  );
};

export default App;
