import React from "react";
import "./Board.css";

const Board = (props) => {
  return (
    <li className="boards__item">
      {props.title} By: {props.owner}
    </li>
  );
};

export default Board;
