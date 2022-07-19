import React from "react";
import PropTypes from "prop-types";
import SingleCard from "./SingleCard.js";

const Card = (props) => {
  if (props.board_id === {}) {
    return null;
  }
  const cardComponents = props.activeBoard.cards.map((card, index) => {
    return (
      <SingleCard
        key={index}
        card_id={card.card_id}
        message={card.message}
        likesCount={card.likesCount}
      ></SingleCard>
    );
  });
  return <section>{cardComponents}</section>;
};

export default Card;
