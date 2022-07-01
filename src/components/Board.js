import React from "react";
import PropTypes from "prop-types";
import "./Board.css";
import Card from "./Card";

const Board = ({ board, cardLike }) => {
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

  return <div className="board">{cards}</div>;
};

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLike: PropTypes.func,
};

export default Board;
