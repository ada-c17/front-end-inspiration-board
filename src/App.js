import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import boardData from './data/boardData.json';

const App = () => {
  // state of the board db
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
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
      .post(URL, newBoardData)
      .then((response) => {
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
        <NewBoardForm addNewBoard={addNewBoard} />
        <BoardList
          boardData={boardData}
          displayBoardTitle={displayBoardTitle}
        />
      </main>
    </div>
  );
};

export default App;
