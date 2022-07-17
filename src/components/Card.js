import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

// import { useState } from "react";

const Card = ({
  id,
  message,
  likesCount,
  setLikesCountCallBack,
  deleteCardCallBack,
}) => {
  return (
    <div className="card">
      <p>{message}</p>
      <button id="delete" onClick={() => deleteCardCallBack(id)}>
        x
      </button>
      <button id="stars" onClick={() => setLikesCountCallBack(id)}>
        ⭐️
      </button>
      <p>{likesCount}</p>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  setLikesCountCallBack: PropTypes.func.isRequired,
  deleteCardCallBack: PropTypes.func.isRequired,
};

export default Card;
