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
}

export default App;
