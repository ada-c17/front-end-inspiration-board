import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = ({ boards }) => {
  const boardComponents = boards.map((board) => {
    return (
      <Board
        key={board.boardId}
        boardId={board.boardId}
        title={board.title}
        owner={board.owner}
      />
    );
  });

  return <section>{boardComponents}</section>;
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object),
};

export default BoardList;
