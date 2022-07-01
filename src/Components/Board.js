import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ id, title, onClickGetCards }) => {
  console.log("inside the board div");
  return (
    <li className="single-board">
      <button onClick={() => onClickGetCards(id)}>{title}</button>
    </li>
  );
};

Board.propTypes = {
  owner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClickGetCards: PropTypes.func.isRequired,
};

export default Board;
