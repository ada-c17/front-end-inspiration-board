import React from "react";
import CardsList from "./CardsList";

const Board = ({ boardData, cardData }) => {
  return (
    <div>
      {/* <h1>Board</h1> */}
      <CardsList cardData={cardData} />
    </div>
  );
};

export default Board;
