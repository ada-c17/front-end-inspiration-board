import React from 'react';
import './Card.css';

// have multiple props in so good canidate to destructure
const Card = (props) => {
  // BEAUTY
  return (
    <div className="card-item">
      <p>{props.message}</p>
      <ul className="card-item__list">
        <li>{props.likes}💖</li>
        <li onClick={() => props.addOneLike(props.card)}>+1</li>
        <li onClick={() => props.deleteCard(props.card)}>Delete</li>
      </ul>
    </div>
  );
};

export default Card;
