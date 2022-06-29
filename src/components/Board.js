import React from "react";
import CardsList from "./CardsList";
import "./stylesheet/Board.css";

const Board = ({ likeHeart, cards, cardData }) => {
  return (
    <li>
      <CardsList cardData={cardData} boardCards={cards} likeHeart={likeHeart} />
    </li>
  );
};

export default Board;
