import React from "react";
import PropTypes from "prop-types";

const Board = ({ boardId, owner, title }) => {
  return (
    <section>
      <ul>
        {title} by {owner}
      </ul>
    </section>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
