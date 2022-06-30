import logo from './logo.svg';
import './App.css';
import React from 'react';
import BoardsList from "./components/BoardsList";

function App() {
  const boards = [{"title": "Mandy", "owner": "Junnie"}, {"title": "Emma", "owner": "Junnie"}]
  return (
    <div>
      <BoardsList 
        boards = {boards}
      />
    </div>
  );
}

export default App;
