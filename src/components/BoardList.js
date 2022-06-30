import React from "react";
import Board from "./Board";
import "./BoardList.css";

const BoardList = (props) => {
  const boardComponents = props.boards.map((board) => {
    return (
      <Board
        id={board.board_id}
        title={board.title}
        owner={board.owner}
        deleteBoard={props.deleteBoard}
      />
    );
  });
  return (
    <div>
      <h1 className="Boards-title">BOARDS</h1>
      {boardComponents}
    </div>
  );
};

export default BoardList;
