import React from "react";
import PropTypes from "prop-types";
import SingleCard from "./SingleCard.js";

const Card = (props) => {
  if (props.activeBoard === {}) {
    return null;
  }
  const cardComponents = props.activeBoard.cards.map((card, index) => {
    return (
      <div>
        <SingleCard
          key={index}
          card_id={card.card_id}
          message={card.message}
          likesCount={card.likesCount}
        ></SingleCard>
      </div>
    );
  });
  return <section>{cardComponents}</section>;
};

Card.propTypes = {
  activeBoard: PropTypes.shape({
    board_id: PropTypes.number,
    title: PropTypes.string,
    owner: PropTypes.string,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        card_id: PropTypes.number,
        message: PropTypes.string,
        likes_count: PropTypes.number,
        board_id: PropTypes.number,
      })
    ),
  }),
};

export default Card;
