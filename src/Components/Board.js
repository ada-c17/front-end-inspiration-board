import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ id, title, onClickGetCards, isSelectedBoard }) => {
  // console.log("inside the board div");

  let clasName = "single-board";
  if (isSelectedBoard) {
    clasName = "single-board-selected";
  }
  return (
    <li className={clasName}>
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
