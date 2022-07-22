import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import "../style/BoardList.css"

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

  return <section className="BoardList">{boardComponents}</section>;
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object),
  onSelectBoard: PropTypes.func.isRequired,
};

export default BoardList;
