import axios from "axios";
import React, { useState } from "react";
import "./CardsView.css";
import CardList from "./components/CardList";
import NewCardButton from "./components/NewCardButton";
import NewCardForm from "./components/NewCardForm";
import PropTypes from "prop-types";

const CardsView = ({ cards, deleteCard, submitCard }) => {
  const [button, setButton] = useState(false);
  const toggleButton = () => {
    setButton(!button);
  };

  return (
    <div>
      <CardList cards={cards} deleteCard={deleteCard}></CardList>
      <NewCardButton onClick={toggleButton}></NewCardButton>
      <NewCardForm submitCard={submitCard} buttonState={button}></NewCardForm>
    </div>
  );
};

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      like_count: PropTypes.number.isRequired,
      board_id: PropTypes.number.isRequired,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
  submitCard: PropTypes.func.isRequired,
};

export default CardsView;
