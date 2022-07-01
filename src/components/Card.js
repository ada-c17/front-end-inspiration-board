import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

// import { useState } from "react";

const Card = (props) => {
  const cardMessage = props.message;
  // const cardLikesCount = props.likesCount;

  // lift state to the board.js
  //create likes count function and delete
  //change functions below for buttons
  // const deleteCard = () => {
  //   props.deleteCardCallBack(props.id);
  // };

  return (
    <div className="card">
      <p>{cardMessage}</p>
      <button id="delete" onClick={() => props.deleteCardCallBack(props.id)}>
        x
      </button>

      {/* <button onClick={() => props.setLikesCountCallback(props.id)}> 
        ⭐️
        </button> */}
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
