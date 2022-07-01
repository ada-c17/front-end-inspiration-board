import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = ({ boards, onSelectBoard }) => {
  const boardComponents = boards.map((board) => {
    return (
      <Board
        key={board.boardId}
        boardId={board.boardId}
        title={board.title}
        owner={board.owner}
        onSelectBoard={onSelectBoard}
      />
    );
  });

  return <section>{boardComponents}</section>;
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object),
  onSelectBoard: PropTypes.func.isRequired,
};

export default BoardList;
