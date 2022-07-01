import React from "react";
import Board from "./Board";
import PropTypes from "prop-types";

const BoardList = ({ boards, selectBoardCallback, deleteBoardCallback }) => {
  const getBoardListJSX = (boards) => {
    return boards.map((board) => {
      return (
        <Board
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
          selectBoardCallback={selectBoardCallback}
          deleteBoardCallback={deleteBoardCallback}
        />
      );
    });
  };
  return <ul>{getBoardListJSX(boards)}</ul>;
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      owner: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  // onUpdateBoard: PropTypes.func.isRequired,
};

export default BoardList;
