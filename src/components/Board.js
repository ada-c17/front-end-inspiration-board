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
      <div onClick={selectBoardCallback}>{props.title}</div>
      <button onClick={deleteBoard}>Delete</button>
    </li>
  );
};

export default Board;
