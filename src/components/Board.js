import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Board = ({ board_id, title, owner, cards, onUpdate }) => {
  const cardComponents = cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        card_id={card.card_id}
        message={card.message}
        likes_count={card.likes_count}
        onUpdate={onUpdate}
      />
    );
  });
  return (
    <section>
      <h2>{title}</h2>
      <ul>{cardComponents}</ul>
    </section>
  );
};

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  board_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Board;
