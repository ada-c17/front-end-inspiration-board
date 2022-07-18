// import axios from "axios";
import React, { useState } from "react";
import "./CardsView.css";
import CardList from "./CardList";
import NewCardButton from "./NewCardButton";
import NewCardForm from "./NewCardForm";
import PropTypes from "prop-types";

const CardsView = ({ cards, deleteCard, submitCard, updateLikes }) => {
  const [visibility, setVisibility] = useState(false);
  const toggleButton = () => {
    setVisibility(!visibility);
  };

  return (
    <div>
      <CardList
        cards={cards}
        deleteCard={deleteCard}
        updateLikes={updateLikes}
      ></CardList>
      <NewCardButton onClick={toggleButton}></NewCardButton>
      <NewCardForm submitCard={submitCard} visibilityState={visibility}></NewCardForm>
    </div>
  );
};

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      like_count: PropTypes.number.isRequired,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
  submitCard: PropTypes.func.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default CardsView;
