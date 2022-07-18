import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
import Draggable from "react-draggable";

const Card = ({
  id,
  message,
  color,
  defaultPos,
  likesCount,
  updatePos,
  setLikesCountCallBack,
  deleteCardCallBack,
}) => {
  console.log(defaultPos);
  if (color == null) {
    color = "#b3b3fc";
  }
  if (defaultPos == null) {
    defaultPos = { x: 100, y: 0 };
  }
  console.log(defaultPos);

  return (
    <Draggable
      key={id}
      defaultPosition={defaultPos}
      onStop={(e, data) => {
        updatePos(data, id);
      }}
    >
      <div style={{ backgroundColor: color }} className="card">
        <p>{message}</p>
        <button id="delete" onClick={() => deleteCardCallBack(id)}>
          x
        </button>
        <button id="stars" onClick={() => setLikesCountCallBack(id)}>
          ⭐️
        </button>
        <span> {likesCount}</span>
      </div>
    </Draggable>
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
