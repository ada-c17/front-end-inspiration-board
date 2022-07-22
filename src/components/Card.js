import React from "react";
import PropTypes from "prop-types";
import "../style/Card.css"

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
    <section className="Card">
      <ul>
        <p>{message}</p>
        <p className="likesCount">{likesCount} likes</p>
        <button onClick={onPlusOneClick} className="cardButton">+1</button>
        <button onClick={onClickRemove} className="cardButton">Delete</button>
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
