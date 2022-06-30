import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = ({ cards, onUpdateLikes }) => {
  const cardComponents = cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        card_id={card.card_id}
        message={card.message}
        likes_count={card.likes_count}
        onUpdate={onUpdateLikes}
      />
    );
  });

  return <section>{cardComponents}</section>;
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    })
  ),
  onUpdateLikes: PropTypes.func.isRequired,
};

export default CardList;
