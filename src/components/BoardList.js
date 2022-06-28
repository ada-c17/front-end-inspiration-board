import React from "react";
import Board from "./Board";

const BoardList = ({ boardData, cardData }) => {
  const getBoardList = (boardData) => {
    return boardData.map((board) => {
      return (
        <Board key={board.board_id} title={board.title} owner={board.owner} />
      );
    });
  };

  console.log(boardData);
  return (
    <div>
      <ul>{getBoardList}</ul>
    </div>
  );
};

export default BoardList;
