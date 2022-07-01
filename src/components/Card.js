import React from "react";

const Card = (props) => {
  return (
    <div>
      <p>{props.card.message}</p>
      <ul>
        <li>{props.card.likes_count}</li>
        <li>+1</li>
        <li>delete</li>
      </ul>
    </div>
  );
};

export default Card;
