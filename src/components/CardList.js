import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ cards, onDeleteCard, onLikeCard }) => {
  const cardsList = cards.map((card) => {
    return (
      <Card
        key={card.cardId}
        cardId={card.cardId}
        message={card.message}
        likes_count={card.likes_count}
        onDeleteCard={onDeleteCard}
        onLikeCard={onLikeCard}
      />
    );
  });

  return <div className="cards-container">{cardsList}</div>;
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onLikeCard: PropTypes.func.isRequired,
};

export default CardList;
