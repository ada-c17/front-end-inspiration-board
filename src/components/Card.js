import React from "react";
import PropTypes from "prop-types";

const Card = ({ card_id, message, likes_count, onUpdate }) => {
  const onPlusOneClick = () => {
    const updatedLikes = {
      card_id: card_id,
      message: message,
      likes_count: likes_count,
    };
    onUpdate(updatedLikes);
  };
  return (
    <li>
      <h4>{message}</h4>
      <h5>{likes_count}</h5>
      <button onClick={onPlusOneClick}>+1</button>
      <button>delete</button>
    </li>
  );
};

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Card;
