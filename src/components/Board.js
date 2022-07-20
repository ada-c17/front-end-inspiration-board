import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = (props) => {
  const deleteOnClick = () => {
    props.deleteBoardsCallback();
  };

  const boardComponents = props.boards.map((board) => {
    const board_object = board;
    return (
      <li
        key={board.id}
        onClick={() => props.selectBoardCallback(board_object)}
      >
        {board.title} by {board.owner}
      </li>
    );
  });

  return (
    <div>
      <h2>Boards</h2>
      <div className="boardlist">{boardComponents}</div>
      <button className="deleteButton" onClick={deleteOnClick}>
        Delete Selected Board
      </button>
    </div>
  );
};

Board.propTypes = {
  boards: PropTypes.array.isRequired,
  fetchBoardsCallback: PropTypes.func.isRequired,
  selectBoardCallback: PropTypes.func.isRequired,
  deleteBoardsCallback: PropTypes.func.isRequired,
};

export default Board;
