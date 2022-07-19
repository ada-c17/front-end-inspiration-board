import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ boardId, title, owner, onSelectBoard, color, selectedBoard, isSelected }) => {
  const onBoardClick = () => {
    console.log(title);
    console.log(boardId);
    console.log(color);
    onSelectBoard(boardId);
  };

  return (
    <>
      <section className="board-bubble">
        <button onClick={onBoardClick} style={{backgroundColor: color, height: selectedBoard === boardId ? "10rem" : "5rem"}}>
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
  onSelectBoard: PropTypes.func,
  isSelected: PropTypes.bool.isRequired,
};

export default Board;
