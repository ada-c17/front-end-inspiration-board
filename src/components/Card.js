import React from 'react';
import './Card.css';

const Card = (props) => {
  // BEAUTY
  return (
    <div className="card-item">
      <p>{props.message}</p>
      <ul className="card-item__list">
        <li>{props.likes}💖</li>
        <li onClick={() => props.addOneLike(props)}>+1</li>
        <li onClick={() => props.deleteCard(props)}>Delete</li>
      </ul>
    </div>
  );
};

export default Card;
