import React from "react";
import PropTypes from "prop-types";

const Card = ({
  cardId,
  message,
  likesCount,
  onUpdate,
  onDelete,
  boardNum,
}) => {
  const onPlusOneClick = () => {
    const updatedCard = {
      cardId: cardId,
      message: message,
      likesCount: (likesCount += 1),
      boardNum: boardNum,
    };

    onUpdate(updatedCard);
  };

  const onClickRemove = () => {
    onDelete(cardId);
  };

  return (
    <section>
      <ul>
        {message} {likesCount} <button onClick={onPlusOneClick}>+1</button>
        <button onClick={onClickRemove}>Delete</button>
      </ul>
    </section>
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  boardNum: PropTypes.number.isRequired,
};

export default Card;
