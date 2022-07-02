import "./App.css";
import React from "react";
import BoardsList from "./components/BoardsList";
import axios from "axios";
import { useEffect, useState } from "react";
import BoardWithCards from "./components/BoardWithCards";

function App() {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);

  const BOARDS_URL = "https://fast-caverns-05936.herokuapp.com/boards";
  const CARDS_URL = "https://fast-caverns-05936.herokuapp.com/cards";

  const fetchBoards = () => {
    axios
      .get(BOARDS_URL)
      .then((res) => {
        const newBoards = res.data.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchBoards, []);

  const fetchCardsForBoard = (id) => {
    axios
      .get(`${BOARDS_URL}/${id}/cards`)
      .then((res) => {
        console.log("we are in this hard function");
        console.log(res)
        const newCards = res.data.cards.map((card) => {
          return {
            card_id: card.card_id,
            board_id: id,
            message: card.message,
            likes_count: card.likes_count,
          };
        });
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCard = (id) => {
    axios.delete(`${CARDS_URL}/${id}`)
      .then(() => {
        const newCards = [];
        for (const card of cards) {
          if (card.card_id !== id){
            newCards.push(card);
          }
        }
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
          boards={boards}
          cardsCallback={fetchCardsForBoard}
          // cards = {}
        />
      </div>
      <div>
        <BoardWithCards
          cards={cards}
          deleteCard={deleteCard}
        ></BoardWithCards>
      </div>
    </div>
  );
}

export default App;
