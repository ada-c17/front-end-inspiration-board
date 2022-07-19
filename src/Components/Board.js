import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ id, title, onClickGetCards, onClickDeleteBoard }) => {
  // console.log("inside the board div");
  return (
    <li className="single-board">
      <button className="get-board-button" onClick={() => onClickGetCards(id)}>
        {title}
      </button>
      <button
        className="remove-board-button"
        onClick={() => onClickDeleteBoard(id)}
      >
        🗑️
      </button>
    </li>
  );
};

Board.propTypes = {
  owner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClickGetCards: PropTypes.func.isRequired,
  onClickDeleteBoard: PropTypes.func.isRequired,
};

export default Board;
