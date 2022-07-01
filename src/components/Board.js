import React from "react";
import PropTypes from "prop-types";
import "./Board.css";
import Card from "./Card";
import "../css/inspo_board.css";

const Board = ({ board, cardLike, boardTitle }) => {
  console.log(`This is Board's board: ${JSON.stringify(board)}`);
  const cards = board.cards.map((card) => {
    return (
      <Card
        key={card.id}
        likes={card.likes}
        board_id={card.board_id}
        message={card.message}
        onLike={cardLike}
      />
    );
  });

  return (
    <section className="board-content">
      <h1>Current Board: {boardTitle}</h1>
      <section className="card-display">{cards}</section>
    </section>
  );
};

Board.propTypes = {
  board: PropTypes.object.isRequired,
  onLike: PropTypes.func,
};

export default Board;
