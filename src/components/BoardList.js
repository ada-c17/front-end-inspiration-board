import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = ({ boards, onSelectBoard }) => {
  const boardComponents = boards.map((board) => {
    return (
      <ul key={board.boardId}>
        <Board
          boardId={board.boardId}
          title={board.title}
          owner={board.owner}
          cards={board.cards}
          onSelectBoard={onSelectBoard}
        />
      </ul>
    );
  });

  return (
    <>
      <ul>{boardComponents}</ul>
    </>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelectBoard: PropTypes.func.isRequired,
};

export default BoardList;
