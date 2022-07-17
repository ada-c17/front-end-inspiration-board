import React, { useState } from 'react';
import './App.css';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import boardData from './data/boardData.json';

const App = () => {
  // State: what file should it be? app
  // can there be more than one state?

  // <section>
  //   <Navigation>
  //   </Navigation>
  //   <Board>
  //   </Board>
  // </section>

  // what happens when Board is clicked
  const [boardTitle, setBoardTitle] = useState('TBD');

  const displayBoardTitle = (title) => {
    setBoardTitle(title);
  };
  return (
    <div>
      <header>
        <h1>INSPIRATION BOARD by Team Name</h1>
      </header>
      <main>
        <h2>Selected Board: {boardTitle}</h2>
        <NewBoardForm />
        <BoardList
          boardData={boardData}
          displayBoardTitle={displayBoardTitle}
        />
      </main>
    </div>
  );
};

export default App;
