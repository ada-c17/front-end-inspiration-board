import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
import Draggable from "react-draggable";

const Card = ({
  id,
  message,
  color,
  PosX,
  PosY,
  likesCount,
  updatePos,
  setLikesCountCallBack,
  deleteCardCallBack,
}) => {
  if (color == null) {
    color = "#b3b3fc";
  }
  if (PosX == null || PosY == null) {
    PosX = 0;
    PosY = 0;
  }
  console.log(PosX, PosY);
  return (
    <Draggable
      key={id}
      positionOffset={{ x: 100, y: 100 }}
      defaultPosition={{ x: PosX, y: PosY }}
      onStop={(e, data) => {
        if (data.x !== PosX && data.y !== PosY) {
          updatePos(data, id);
        }
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
        <span id="likes"> {likesCount}</span>
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
