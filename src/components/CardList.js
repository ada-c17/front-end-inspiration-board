// import axios from "axios";
import React from "react";
import "./CardList.css";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ cards, deleteCard, updateLikes }) => {
  const cardComponents = cards.map((card) => {
    return (
      <Card
        card_id={card.card_id}
        board_id={card.board_id}
        message={card.message}
        like_count={card.like_count}
        deleteCard={deleteCard}
        updateLikes={updateLikes}
      ></Card>
    );
  });

  return <div className="cardList">{cardComponents}</div>;
};

CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      board_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      like_count: PropTypes.number.isRequired,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default CardList;
