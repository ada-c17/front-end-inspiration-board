import React from "react";
import "./Board.css";

const Board = (props) => {
  const deleteBoard = () => {
    props.deleteBoard(props.id);
  };
  const fetchCards = () => {
    props.fetchCards(props.id);
  };
  return (
    <div id="boardItem">
      <button className="boards__item" onClick={fetchCards}>
        {props.title} By: {props.owner}{" "}
      </button>
      <button className="deleteButton" onClick={deleteBoard}>
        X
      </button>
    </div>
  );
};

export default Board;
