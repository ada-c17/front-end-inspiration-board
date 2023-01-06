import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({
  boardId, 
  title,
  owner,
  onSelectBoard,
  color,
  selectedBoardId,
}) => {
  const onBoardClick = () => {
    onSelectBoard(boardId);
  };

  return (
    <>
      <section className="board-bubble">
        <button
          onClick={onBoardClick}
          style={{
            backgroundColor: color, 
            height: selectedBoardId === boardId ? "10rem" : "5rem",
          }}
        > 
          <h1 className="boardId">{boardId}</h1>
          <h2>{title}</h2>  
          <h3>By {owner} </h3>
        </button>
      </section>
    </>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  cards: PropTypes.array,
  color: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func,
  isSelected: PropTypes.bool, 
}
export default Board;
