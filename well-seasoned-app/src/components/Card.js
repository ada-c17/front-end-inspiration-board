import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import heart from "../assets/black_heart.png";

const Card = ({ cardId, message, likesCount, boardId, increaseLikesCard }) => {
  const updateLikes = () => {
    likesCount += 1;
    const newCard = {
      cardId,
      message,
      likesCount,
      boardId,
    };
    increaseLikesCard(newCard);
  };

  return (
    <li>
      <p id="message">{message}</p>
      <div id="below-message">
        <div id="likes-and-heart">
          <p id="likes-count">{likesCount}</p>
          <img src={heart} id="heart" alt="heart" onClick={updateLikes} />
        </div>
        <button id="delete">Delete</button>
      </div>
    </li>
  );
};

export default Card;
