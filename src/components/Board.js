import "./board.css";
import React from "react";

const Board = (props) => {
  const selectBoardCallback = () => {
    props.selectBoardCallback(props.id);
  };
  return <li onClick={selectBoardCallback}>{props.title}</li>;
};

export default Board;
