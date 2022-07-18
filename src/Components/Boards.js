import React from "react";
import PropTypes from "prop-types";
import "./Boards.css";
import Board from "./Board";

const Boards = ({ boards, selectedBoardId, onClickGetCards }) => {
  const getBoardsList = (boards) => {
    return boards.map((board) => {
      const isSelected = board.board_id === selectedBoardId;
      return (
        <Board
          key={board.board_id}
          id={board.board_id}
          owner={board.owner}
          title={board.title}
          isSelectedBoard={isSelected}
          onClickGetCards={onClickGetCards}
        />
      );
    });
  };
  return <ul className="board-wrapper"> {getBoardsList(boards)} </ul>;
};

Boards.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      board_id: PropTypes.number.isRequired,
      owner: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickGetCards: PropTypes.func.isRequired,
};

export default Boards;
