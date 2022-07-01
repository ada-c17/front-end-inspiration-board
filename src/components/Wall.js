import React from "react";
import "./Wall.css";
import Board from "./Board";
import BoardButton from "./BoardButton";
import PropTypes from "prop-types";

const Wall = ({ boardData }) => {
  const buttonComponents = boardData.map((button) => (
    <BoardButton key={button.board_id} id={button.board_id} />
  ));

  return (
    <div>
      <ul>{buttonComponents}</ul>
      <Board board_id="1" />
    </div>
  );
};

Wall.propTypes = {
  boardData: PropTypes.array.isRequired,
};

export default Wall;
