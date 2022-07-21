import React, { useState } from "react";
import PropTypes from "prop-types";
import CardList from "./CardList";

const Board = (props) => {
  const selectBoard = () => {
    props.selectBoard(props.boardId);
  };

  return (
    <li>
      <button onClick={selectBoard}>{props.title}</button>
    </li>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default Board;
