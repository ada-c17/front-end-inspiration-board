import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({
  id,
  message,
  color,
  likesCount,
  setLikesCountCallBack,
  deleteCardCallBack,
}) => {
  console.log(color);
  if (color == null) {
    color = "#b3b3fc";
  }
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <p>{message}</p>
      <button id="delete" onClick={() => deleteCardCallBack(id)}>
        x
      </button>
      <button id="stars" onClick={() => setLikesCountCallBack(id)}>
        ⭐️
      </button>
      <span> {likesCount}</span>
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
