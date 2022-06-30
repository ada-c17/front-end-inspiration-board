import React from "react";
import PropTypes from "prop-types";
import CardList from "./CardList";


const Board = (props) => {
  const cardComponents = props.cards.map((card) => {
    return (
      <CardList
        key={card.card_id}
        card_id={card.card_id}
        message={card.message}
        likes_count={card.likes_count}
        onUpdate={props.onUpdate}
      />
    );
  });

  return (
    <section>

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
