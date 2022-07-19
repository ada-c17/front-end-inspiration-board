import React from "react";
import "./Board.css";
import CardForm from "./CardForm";

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
      <div>
        <CardForm addCard={props.addCard} boardID={props.id}></CardForm>
      </div>
    </div>
  );
};

export default Board;
