import React /* , {useState} */ from "react";
import "./App.css";
import Board from "./components/Board";
import boardandcardData from "./data/boardsandcards.json";

const App = () => {
  // const [boardData, setUpdateBoard] = useState(boardandcardData);
  // let [likedNum, setLikedNum] = useState(0);

  // const increaseLikeCount = (updatedCard) => {
  //   const newCardData = boardData.cards.map((card) => {
  //     if (card.card_id === updatedCard.card_id) {
  //       likedNum = card.likes_count;
  //       increaseLikes();
  //       return updatedCard;
  //     } else {
  //       return card;
  //     }
  //   });
  //   setUpdateBoard(newCardData);
  // };
  // const increaseLikes = () => {
  //   setLikedNum(parseInt((likedNum += 1)));
  // };
  return (
    <div id="App">
      <header>
        <h2>dream board</h2>
        <h2>Board id: {boardandcardData.board_id}</h2>
      </header>
      <main>
        <Board
          boards={boardandcardData} /* onUpdateLiked={increaseLikeCount} */
        />
      </main>
    </div>
  );
};

export default App;
