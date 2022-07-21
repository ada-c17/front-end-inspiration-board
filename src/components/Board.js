import React from "react";
import PropTypes from "prop-types";

const Board = (props) => {
  const selectBoard = () => {
    props.selectBoard(props.boardId);
  };

  return <button onClick={selectBoard}>{props.title}</button>;
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default Board;
