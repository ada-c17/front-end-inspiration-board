import './App.css';
import React from 'react';
import BoardsList from "./components/BoardsList";
import axios from 'axios';
import { useEffect, useState } from "react"

function App() {
  const [boards, setBoards] = useState([]);

  const URL = 'https://fast-caverns-05936.herokuapp.com/boards';

  const fetchBoards = () => {
    axios.get(URL)
      .then((res) => { 
        const newBoards = res.data.map((board) => {
          // const board_object = {
          //   id: board.id,
          //   title: board.title,
          //   owner: board.owner,
          //   cards: board.cards,
          // };
          // if (board_object['cards'].length > 0){
          //   let cardsList = []
          //   for (const card of board_object['cards']){
          //     cardsList.push(card)
          //   }
          // }        
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
            // cards: board.cards,
          };
        });
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(fetchBoards, []);
  // const boards = [{"title": "Mandy", "owner": "Junnie"}, {"title": "Emma", "owner": "Junnie"}]
  return (
    <div>
      <BoardsList 
        boards = {boards}
      />
    </div>
  );
}

export default App;
