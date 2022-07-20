import React from "react";
import PropTypes from "prop-types";
import SingleCard from "./SingleCard.js";

const Card = (props) => {
  if (props.cards === []) {
    return null;
  }
  const cardComponents = props.cards.map((card, index) => {
    return (
      <SingleCard
        key={index}
        card_id={card.card_id}
        message={card.message}
        likes_count={card.likes_count}
        deleteCardCallBack={props.deleteCardCallBack}
      ></SingleCard>
    );
  });
  return <section>{cardComponents}</section>;
};

Card.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number,
      message: PropTypes.string,
      likes_count: PropTypes.number,
      board_id: PropTypes.number,
    })
  ),
};

export default Card;
