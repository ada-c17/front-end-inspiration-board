import React from "react";
import Card from "./Card";
// import Board from "./Board";
// import "./BoardList.css";

const CardList = (props) => {
  const setSortType = props.setSortType;
  const cardsComponents = props.cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        id={card.card_id}
        likes_count={card.likes_count}
        message={card.message}
        board_id={card.board_id}
        deleteCard={props.deleteCard}
        updateLike={props.updateLike}
      />
    );
  });
  return (
    <div>
      <h1 className="Cards-title">CARDS</h1>
      <p>Sort by</p>
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="card_id">ID</option>
        <option value="likes_count">Likes</option>
        <option value="message">Alphabetically</option>
      </select>
      <div className="cardList">{cardsComponents}</div>
    </div>
  );
};

export default CardList;
