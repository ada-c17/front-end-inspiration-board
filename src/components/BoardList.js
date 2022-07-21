import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = (props) => {
  // map function to return buttons with title of each board
  const boardTitles = props.boardData.map((board) => {
    return (
      <Board
        boardId={board.boardId}
        title={board.title}
        creator={board.creator}
        selectBoard={props.selectBoard}
        cards={board.cards}
      ></Board>
    );
  });

  return <section>{boardTitles}</section>;
};

BoardList.propTypes = {
  boardData: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectBoard: PropTypes.func.isRequired,
};

export default BoardList;
