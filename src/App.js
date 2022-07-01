import './App.css';
import React from 'react';
import BoardsList from "./components/BoardsList";
import axios from 'axios';
import { useEffect, useState } from "react";
// import Board from "./components/Board";

function App() {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);

  const URL = 'https://fast-caverns-05936.herokuapp.com/boards';

  const fetchBoards = () => {
    axios.get(URL)
      .then((res) => { 
        const newBoards = res.data.map((board) => {       
          return {
            id: board.id,
            title: board.title,
            owner: board.owner
          };
        });
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(fetchBoards, []);

  const fetchCardsForBoard= (id) => {
    axios.get(`${URL}/${id}/cards`)
    .then((res) => {
      console.log("we are in this hard function")
      console.log(res)
      const newCards = res.data.cards.map((card) => {
        return {
          card_id: card.id,
          board_id: id,
          message: card.message,
          likes_count: card.likes_count
        };
      });
      setCards(newCards);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  
  return (
    <div>
      <div>
        <BoardsList 
          boards = {boards}
          cardsCallback = {fetchCardsForBoard}
          // cards = {}
        />
      </div>
      {/* <div>
        <Board>
          
        </Board>

      </div> */}
    </div>
  );
}



export default App;
