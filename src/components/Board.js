import React from "react";
import "./Board.css";

const Board = (props) => {
  const deleteBoard = () => {
    props.deleteBoard(props.id);
  }
  return (
    <div>
    <li className="boards__item">
      {props.title} By: {props.owner}
    </li>
    <button onClick={deleteBoard}>X</button>
    </div>
  );
};

export default Board;
