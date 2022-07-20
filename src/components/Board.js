import React from "react";
import "./Board.css";
import CardModal from "./CardModal";
import { useState } from "react";

const Board = (props) => {
  const [openCardModal, setOpenCardModal] = useState(false);
  const deleteBoard = () => {
    props.deleteBoard(props.id);
  };
  const fetchCards = () => {
    props.fetchCards(props.id);
  };
  return (
    <div id="boardItem">
      {openCardModal && (
        <CardModal
          addCard={props.addCard}
          closeModal={setOpenCardModal}
          boardID={props.id}
        />
      )}
      <button className="boards__item" onClick={fetchCards}>
        {props.title} By: {props.owner}{" "}
      </button>
      <button
        onClick={() => {
          setOpenCardModal(true);
        }}
      >
        ADD CARD
      </button>
      <button className="deleteButton" onClick={deleteBoard}>
        X
      </button>
    </div>
  );
};

export default Board;
