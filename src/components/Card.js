import axios from "axios";
import React, { useState } from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ card_id, message, like_count, deleteCard, updateLikes }) => {
  // const increaseLikeCt = () => {
  //     updateLikes(id);
  // }

  return (
    <div>
      <button onClick={() => updateLikes(card_id)}>{like_count}</button>
      <button onClick={() => deleteCard(card_id)}>Delete</button>
      <p>{message}</p>
    </div>
  );
};

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default Card;
