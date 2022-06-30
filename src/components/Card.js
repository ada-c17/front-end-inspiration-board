import React from "react";
import PropTypes from "prop-types";

const Card = ({ cardId, message, likesCount, onUpdate }) => {
  const onPlusOneClick = () => {
    const updatedCard = {
      cardId: cardId,
      likesCount: (likesCount += 1),
    };

    onUpdate(updatedCard);
  };

  return (
    <section>
      <ul>
        {message} {likesCount} <button onClick={onPlusOneClick}>+1</button>
        <button>Delete</button>
      </ul>
    </section>
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Card;
