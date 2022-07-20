// import axios from "axios";
import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({
  card_id,
  board_id,
  message,
  like_count,
  deleteCard,
  updateLikes,
}) => {
  // const increaseLikeCt = () => {
  //     updateLikes(id);
  // }

  return (
    <div className="card">
      <button  id="likeCount" onClick={() => updateLikes(card_id)}>{like_count} ❤️ </button>
      <button id="deleteCard" onClick={() => deleteCard(card_id)}>X</button>
      <h2>{message}</h2>
    </div>
  );
};

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  board_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default Card;
