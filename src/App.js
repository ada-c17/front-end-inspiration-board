import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import boardData from "./data/boards.json";
import cardData from "./data/cards.json";

const kBaseUrl = "https://ssh-back-end-inspiration-board.herokuapp.com/boards";

const boardApiToJson = (board) => {
  const { title, owner, board_id: boardId } = board;
  return { title, owner, boardId };
};

const getBoardData = () => {
  return axios
    .get(`${kBaseUrl}`)
    .then((response) => {
      return response.data.map(boardApiToJson);
    })
    .catch((err) => {
      console.log(err);
    });
};
const App = () => {
  const [cardData, setLikedData] = useState([]);
  const [boardData, setBoardData] = useState([]);

  const loadBoards = () => {
    getBoardData().then((boards) => {
      setBoardData(boards);
    });
  };

  const loadCards = () => {
    getCardData().then((cards) => {
      setCardData(cards);
    });
  };

  useEffect(() => {
    loadBoards();
    loadCards();
  }, []);

  const increaseLikeCount = (updatedCard) => {
    console.log("+1 clicked");
    cardData.map((card) => {
      if (card.card_id === updatedCard.card_id) {
        console.log(`Likes: ${updatedCard.likes_count}`);
        return updatedCard;
      } else {
        return card;
      }
    });

    setLikedData(newCards);
  };

  return (
    <div id="App">
      <header>
        <h2>dream board</h2>
      </header>
      <main>
        <BoardList boards={boardData} />
        <CardList cards={cardData} onUpdateLikes={increaseLikeCount} />
      </main>
    </div>
  );
};

export default App;
