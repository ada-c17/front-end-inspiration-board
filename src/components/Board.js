import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ boardId, title, owner, cards, onSelectBoard }) => {
  const onBoardClick = () => {
    onSelectBoard(boardId);
  };

  return (
    <>
      <section className="board-bubble">
        <button onClick={onBoardClick}>
          <h2>Title: {title}</h2>
          <h3>Owner: {owner} </h3>
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
};

export default Board;
