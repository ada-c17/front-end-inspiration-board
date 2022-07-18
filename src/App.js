import "./App.css";
import React from "react";
import BoardsList from "./components/BoardsList";
import axios from "axios";
import { useEffect, useState } from "react";
import BoardWithCards from "./components/BoardWithCards";
import CardForm from "./components/CardForm";
import BoardForm from "./components/BoardForm";

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
    console.log(id)
    axios
      .get(`${BOARDS_URL}/${id}/cards`)
      .then((res) => {
        // console.log("we are in this hard function");
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

  const changeLikes = (id) =>{
    axios.patch(`${CARDS_URL}/${id}/likes`)
      .then(() => {
        const newCards = [];
        for (const card of cards) {
          const newCard = {...card};
          if (newCard.card_id === id){
            newCard.likes_count++;
          } 
          newCards.push(newCard);
        }
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addBoard = (boardInfo) => {
    axios
      .post(BOARDS_URL, boardInfo)
      .then((response) => {
        fetchBoards();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const addCard = (cardInfo) => {
    axios
      .post(CARDS_URL, cardInfo)
      .then((response) => {
        fetchCardsForBoard(cardInfo.board_id);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div id="Boards">
        <hi>BOARDS</hi>
        <BoardsList
          boards = {boards}
          cardsCallback={fetchCardsForBoard}
          // cards = {}
        />
      </div>
      <div id= "BoardsWithCards">
        <BoardWithCards
          cards={cards}
          deleteCard={deleteCard}
          changeLikes={changeLikes}
          // boardTitle={boards.board.title}
        />
      </div>
      <div>
        <BoardForm addBoardCallback={addBoard} />
      </div>  
      <div>
        <CardForm cardsCallback={addCard} />
      </div>
    </div>
  );
}

export default App;
