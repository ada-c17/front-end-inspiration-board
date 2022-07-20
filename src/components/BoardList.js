import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";
import "./BoardList.css";

const BoardList = ({
  boards,
  handleChosenBoardCallback,
  chosenBoardId,
  deleteBoard,
}) => {
  const getBoardListJSX = (boards) => {
    return boards.map((board) => {
      return (
        <Board
          key={board.board_id}
          boardId={board.board_id}
          title={board.title}
          owner={board.owner}
          cards={board.card_ids}
          handleChosenBoardCallback={handleChosenBoardCallback}
          chosenBoardId={chosenBoardId}
          deleteBoard={deleteBoard}
        />
      );
    });
  };
  return (
    <div className="app-sidebar-boards">
      <div>{getBoardListJSX(boards)}</div>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      board_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleChosenBoardCallback: PropTypes.func.isRequired,
};

export default BoardList;
