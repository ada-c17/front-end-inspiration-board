import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
// import { useState } from "react";

const Card = (props) => {
  const cardMessage = props.message;
  const cardLikesCount = props.likesCount;

  //create likes count function and delete
  //change functions below for buttons
  return (
    <div className="Card">
      <p>{cardMessage}</p>
      <p>
        <button onClick={() => props.setLikesCountCallback(props.id)}>
          ⭐️
        </button>
        <button onClick={() => props.deleteCardCallBack(props.id)}>
          Delete
        </button>
      </p>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
  setLikesCountCallback: PropTypes.func.isRequired,
  deleteCardCallBack: PropTypes.func.isRequired,
};

export default Card;
