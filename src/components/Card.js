import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ cardId, message, likes_count, onDeleteCard, onLikeCard }) => {
  const handleOnDelete = () => {
    onDeleteCard(cardId);
  };

  const handleOnLike = () => {
    onLikeCard(cardId);
  };

  return (
    <div className="border-polaroid">
      <img
        className="delete"
        onClick={handleOnDelete}
        src={require("../images/x-icon.png")}
        alt="x"
      />
      <div className="message">
        <p>{message}</p>
      </div>
      <div className="like-container">
        <img
          className="like"
          onClick={handleOnLike}
          src={require("../images/heart.png")}
          alt="❤️"
        />{" "}
        <span className="count">{likes_count}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
  onLikeCard: PropTypes.func.isRequired,
};

export default Card;
