import React from "react";
import Card from "./Card.js";
import PropTypes from "prop-types";

const CardList = (props) => {
  const cardComponents = props.cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        card_id={card.card_id}
        message={card.message}
        likes_count={card.likes_count}
        board_id={card.board_id}
        fetchCardsCallback={props.fetchCardsCallback}
        likeCardCallback={props.likeCardCallback}
      ></Card>
    );
  });

  return (
    <section>
      <h2>Hello I am CardList</h2>
      <ul>{cardComponents}</ul>
    </section>
  );
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
      board_id: PropTypes.number.isRequired,
    })
  ),
  fetchCardsCallback: PropTypes.func.isRequired,
  likeCardCallback: PropTypes.func.isRequired,
};

export default CardList;
