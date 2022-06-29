import React from "react";
import Board from "./Board";
import "./BoardList.css";

const BoardList = (props) => {
  const boardComponents = props.boards.map((board) => {
    return <Board id={board.id} title={board.title} owner={board.owner} />;
  });
  return (
    <div>
      <h1 className="Boards-title">BOARDS</h1>
      {boardComponents}
    </div>
  );
};

export default BoardList;
