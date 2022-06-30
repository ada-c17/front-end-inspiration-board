import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = ({ boards }) => {
  const boardComponents = boards.map((board) => {
    return (
      <Board
        key={board.board_id}
        id={board.board_id}
        title={board.title}
        owner={board.owner}
      />
    );
  });

  return <section>{boardComponents}</section>;
};

BoardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  onUpdate: PropTypes.func,
};

export default BoardList;
