import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = (props) => {
  const viewBoard = (id) => {
    props.selectBoard(id);
  };

  // map function to return buttons with title of each board
  const boardTitles = props.boards.map((board) => {
    const viewBoardById = () => {
      viewBoard(board.id);
    };
    return (
      <button key={board.id} className="board-button" onClick={viewBoardById}>
        {board.title}
      </button>
    );
  });

  return <section className="board-list">{boardTitles}</section>;
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectBoard: PropTypes.func.isRequired,
};

export default BoardList;
