import React from "react";
import PropTypes from "prop-types";
// import Card from "./Card";

const Board = (boards) => {
  const cardComponents = cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        card_id={card.card_id}
        message={card.message}
        likes_count={card.likes_count}
        onUpdate={boards.onUpdate}
      />
    );
  });

  return (
    <section>
      <h2>
        {boards.title} by {boards.owner}
      </h2>
      <ul>{cardComponents}</ul>
    </section>
  );
};

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  board_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Board;
