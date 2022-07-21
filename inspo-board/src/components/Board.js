import React from "react";
import PropTypes from "prop-types";

const Board = ({ boardId, title, owner, onSelectBoard }) => {
  const onItemClick = () => {
    onSelectBoard(boardId, title, owner);
  };

  return (
    <li onClick={onItemClick}>
      {title} - {owner}
    </li>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func.isRequired,
};

export default Board;
