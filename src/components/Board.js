import React from "react";
import PropTypes from "prop-types";

const Board = ({ board_id, owner, title }) => {
  return (
    <section>
      <ul>
        {board_id}
        {title} by {owner}
      </ul>
    </section>
  );
};

Board.propTypes = {
  board_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
