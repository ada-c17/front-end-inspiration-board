import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ cards, onUpdateLikes, onDelete }) => {
  const cardComponents = cards.map((card) => {
    return (
      <Card
        key={card.cardId}
        cardId={card.cardId}
        message={card.message}
        likesCount={card.likesCount}
        onUpdate={onUpdateLikes}
        onDelete={onDelete}
      />
    );
  });

  return <section>{cardComponents}</section>;
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired,
    })
  ),
  onUpdateLikes: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CardList;
