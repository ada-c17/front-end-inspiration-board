import "./board.css";
import React from "react";

const Board = (props) => {
  const deleteBoard = () => {
    props.deleteBoardCallback(props.id);
  };
  const selectBoardCallback = () => {
    props.selectBoardCallback(props.id);
  };
  return (
    <li>
      <div onClick={selectBoardCallback}>
        {props.title}
        <button onClick={deleteBoard} className="delete-board">
          Delete
        </button>
      </div>
    </li>
  );
};

export default Board;
