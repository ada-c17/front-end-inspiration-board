import React from "react";
import PropTypes from "prop-types";

const Card = ({ card_id, message, likes_count, onUpdate }) => {
  const onPlusOneClick = () => {
    const updatedCard = {
      card_id: card_id,
      likes_count: (likes_count += 1),
    };

    onUpdate(updatedCard);
  };

  return (
    <section>
      <ul>
        {message} {likes_count} <button onClick={onPlusOneClick}>+1</button>
        <button>Delete</button>
      </ul>
    </section>
  );
};

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Card;
