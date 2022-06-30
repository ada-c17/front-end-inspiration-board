import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div>
      Hello I am Card
      <ul>
        <li>Message: {props.message}</li>
        <li>{props.likes_count} ❤️</li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  board_id: PropTypes.number.isRequired,
  fetchCardsCallback: PropTypes.func.isRequired,
};

export default Card;
