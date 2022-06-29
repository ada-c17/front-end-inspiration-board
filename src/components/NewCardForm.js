import React from "react";
import "./card.js";
import PropTypes from "prop-types";

const NewCardForm = (props) => {
  const updatedEntry = {
    card_id: props.card_id,
    message: props.message,
    board_id: props.board_id,
  };
  NewCardForm(updatedEntry);
  return <div className="card"></div>;
};

NewCardForm.propTypes = {
  board_id: PropTypes.number.isRequired,
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default NewCardForm;
