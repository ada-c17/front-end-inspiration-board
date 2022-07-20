import React from "react";
import PropTypes from "prop-types";
import '../style/Board.css'

const Board = ({ boardId, owner, title, onSelectBoard }) => {
  const onTitleClick = () => {
    onSelectBoard(boardId);
  };

  return (
    <section className="Board">
      <ul onClick={onTitleClick}>
        {title} by {owner}
      </ul>
    </section>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func.isRequired,
};

export default Board;
