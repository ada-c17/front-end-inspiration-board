import React from "react";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import "./Board.css";

const Board = ({
  chosenBoardId,
  boardId,
  title,
  handleChosenBoardCallback,
  deleteBoard,
}) => {
  return (
    <div
      className={`app-sidebar-board ${
        boardId === chosenBoardId ? "active" : ""
      }`}
      onClick={() => handleChosenBoardCallback(boardId)}
    >
      <p className="title-boards">{title}</p>
      <span className="spacer"></span>
      <div className="delete-button">
        <MdDelete className="delete-btn" onClick={() => deleteBoard(boardId)} />
      </div>
    </div>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleChosenBoardCallback: PropTypes.func.isRequired,
};

export default Board;
