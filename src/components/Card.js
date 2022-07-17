import React from "react";

// have multiple props in so good canidate to destructure
const Card = ({ props }) => {
  // BEAUTY
  return (
    <div>
      <ul>
        <li>{props.card.message}</li>
        <li>{props.card.like_count}💖</li>
        <li onClick={() => props.likeAdd(props.card)}>+1</li>
        <li onClick={() => props.deleteCard(props.card)}>Delete</li>
      </ul>
    </div>
  );
};

export default Card;
