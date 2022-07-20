import React from "react";
import CardForm from "./CardForm";

const CardModal = (props) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseButton">
          <button
            onClick={() => {
              props.closeModal(false);
              props.fetchCards(props.boardID);
            }}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <div className="title">Create a new card</div>
        <div className="body">
          <CardForm
            addCard={props.addCard}
            fetchCards={props.fetchCards}
            boardID={props.boardID}
          />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default CardModal;
