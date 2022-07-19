<<<<<<< HEAD
import "./App.css";
import Board from "./components/boards.js";
// import boards from "./data/boards.json";
import Card from "./components/cards.js";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [cards, updateCards] = useState([]);
  const [boards, getBoards] = useState([]);

  const showCards = (id) => {
    let specificBoard = boards.find((element) => element.board_id === id);
    updateCards(specificBoard.cards);
    console.log(cards);
  };
  useEffect(() => {
    axios
      .get("http://shiver-of-sharks.herokuapp.com/boards")
      .then((response) => {
        getBoards(response.data.boards);
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
  }, []);

  return (
    <div>
      <h1>Inspiration Board</h1>
      <Board boards={boards} showCardsFunction={showCards}></Board>
      <Card cards={cards}></Card>
      <br></br>
      <button onClick={showCards}>click me</button>
    </div>
  );
=======
import './App.css';
import Board from './components/boards.js'
import boards from './data/boards.json'
import Card from './components/cards.js'
import {useState} from 'react'
import SingleBoard from './components/SingleBoard.js'

function App() {
  const [isOnHomepage, setIsOnHomepage] = useState(true)
  const [activeBoard, setActiveBoard] = useState(
    {
    "board_id": 1,
    "title": "my dream farm",
    "owner" : "philomena",
    "cards" : [
      {
      "card_id": 1,
      "message": "i love chickens",
      "likesCount" : 0
      },
      {
        "card_id": 2,
        "message": "i also love ducks",
        "likesCount": 0
      }]
    })

  if (isOnHomepage){
    return (
      <div>
        <div>
          <h1>Inspiration Board</h1>
          <Board boards={boards} setActiveBoard={setActiveBoard} setIsOnHomepage={setIsOnHomepage} isOnHomepage={isOnHomepage}>
  
          </Board>
        </div>
        </div>
    );
  } else {
    // return(<div></div>)
    return(<SingleBoard board={activeBoard} setActiveBoard={setActiveBoard} setIsOnHomepage={setIsOnHomepage}>
      
      </SingleBoard>)
  }
>>>>>>> 7f2be5ae8f888f45f651df61e02898e12664e76a
}

export default App;
