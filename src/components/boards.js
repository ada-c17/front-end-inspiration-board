import React from "react";
import SingleBoard from "./SingleBoard.js";
import "./boards.css";
import PropTypes from "prop-types";

const Board = (props) => {
  const boardComponents = props.boards.map((board, index) => {
    return (
      <SingleBoard
        key={index}
        setIsOnHomepage={props.setIsOnHomepage}
        board={board}
        isOnHomepage={props.isOnHomepage}
        setActiveBoard={props.setActiveBoard}
      ></SingleBoard>
    );
  });

  return <section>{boardComponents}</section>;
};

Board.propTypes = {
  setIsOnHomepage: PropTypes.func.isRequired,
  isOnHomepage: PropTypes.bool.isRequired,
  setActiveBoard: PropTypes.func.isRequired,
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      board_id: PropTypes.number,
      title: PropTypes.string,
      owner: PropTypes.string,
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          card_id: PropTypes.number,
          message: PropTypes.string,
          likes_count: PropTypes.number,
          board_id: PropTypes.number,
        })
      ),
    })
  ),
};

export default Board;
