import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";

function App() {
  const URL = "https://gramtaschie.herokuapp.com";

  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);

  const fetchBoards = () => {
    axios
      .get(`${URL}/boards`)
      .then((response) => {
        console.log("fetchBoard request");
        console.log(response.data);
        const updatedBoards = response.data;
        console.log(updatedBoards);
        setBoards(updatedBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCards = () => {
    axios
      .get(`${URL}/cards`)
      .then((response) => {
        console.log("fetchCard request");
        console.log(response.data);
        const updatedCards = response.data;
        console.log(updatedCards);
        setCards(updatedCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => fetchBoards, []);
  useEffect(() => fetchCards, []);

  return (
    <div>
      <header>
        <h1>Inspiration Board</h1>
        <Board boards={boards} fetchBoardsCallback={fetchBoards}></Board>
        <NewBoardForm></NewBoardForm>
        <NewCardForm></NewCardForm>
        <CardList cards={cards} fetchCardsCallback={fetchCards}></CardList>
      </header>
    </div>
  );
}

export default App;
