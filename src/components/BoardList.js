import React from "react";
import Board from "./Board";
import "./BoardList.css";

const BoardList = (props) => {
  const boardComponents = props.boards.map((board) => {
    return (
      <Board
        key={board.board_id}
        id={board.board_id}
        title={board.title}
        owner={board.owner}
        deleteBoard={props.deleteBoard}
        fetchCards={props.fetchCards}
        addCard={props.addCard}
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
