/* eslint-disable camelcase */
import React from "react";
import PropTypes from 'prop-types';
import "./Card.css";

const Card = (props) => {
  // return console.log("This is a Card");
  const cardClassType = props.id % 2 === 0 ? 'divisibleBy2' : props.id % 3 === 0 ? 'divisibleBy3' : props.id % 5 === 0 ? 'divisibleBy5' : 'rotateDefault';


  const deleteCard = () => {
    props.deleteCardCallback(props.card_id);
  };

  const likeCard = () => {
    props.likeCardCallback(props.card_id);
  };

  return (
    <div className = {`${cardClassType} card-entry`}>
      <ul>
        <li>
          <section className = 'card-container'>
            <button
              className = 'delete-button'
              onClick = {deleteCard}
            >
              x
            </button>
            <p>{props.message}</p>
            <button
              className = 'like-button'
              onClick = {likeCard}
            >
              {props.likes_count >= 1 ? '❤️': '🤍'} {props.likes_count}
            </button>
          </section>
        </li>
      </ul>
    </div>
  );
};
Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
};

export default Card;
