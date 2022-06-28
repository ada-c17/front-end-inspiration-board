import React from "react";
import CardsList from "./CardsList";

const Board = ({ cardData }) => {
  return (
    <div>
      <CardsList cardData={cardData} />
    </div>
  );
};

export default Board;
