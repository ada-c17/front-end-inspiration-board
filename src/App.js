import React, { useState } from "react";
import "./App.css";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import boardData from "./data/boards.json";
import cardData from "./data/cards.json";

const App = () => {
  // const [boards, setBoardData] = useState(boardData);
  let [likedNum, setLikedNum] = useState(0);

  const increaseLikeCount = (updatedCard) => {
    const newCardData = cardData.cards.map((card) => {
      if (card.card_id === updatedCard.card_id) {
        likedNum = card.likes_count;
        increaseLikes();
        return updatedCard;
      } else {
        return card;
      }
    });
    setLikedNum(likedNum);
  };
  const increaseLikes = () => {
    setLikedNum(parseInt((likedNum += 1)));
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
