import React from "react";
import Board from "./Board";

const BoardList = (props) => {
  const boardComponents = props.boards.map((board) => {
    return <Board id={board.id} title={board.title} owner={board.owner} />;
  });
  return (
    <div>
      <h1>Boards</h1>
      {boardComponents}
    </div>
  );
};

export default BoardList;
