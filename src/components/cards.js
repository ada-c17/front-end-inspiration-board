import React from "react";
import PropTypes from "prop-types";
import SingleCard from "./SingleCard.js";

const Card = (props) => {
  const cardComponents = props.cards.map((card, index) => {
    return (
      <div>
        <SingleCard
          message={card.message}
          likesCount={card.likes_count}
        ></SingleCard>
      </div>
    );
  });
  return <section>{cardComponents}</section>;
};

export default Card;
