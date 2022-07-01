import React from "react";
import PropTypes from "prop-types";

const Board = ({ boardId, owner, title, onSelectBoard }) => {
  const onTitleClick = () => {
    onSelectBoard(boardId);
  };

  return (
    <section>
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
