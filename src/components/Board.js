import React from "react";
import "./Board.css";

const Board = (props) => {
  const deleteBoard = () => {
    props.deleteBoard(props.id);
  };
  return (
    <div id="boardItem">
      <li className="boards__item">
        {props.title} By: {props.owner}{" "}
      </li>
      <button className="deleteButton" onClick={deleteBoard}>
        X
      </button>
    </div>
  );
};

export default Board;
