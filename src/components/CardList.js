import axios from "axios";
import React, { useState } from "react";
import "./CardList.css";
import Card from "./components/Card";
import PropTypes from "prop-types";

const CardList = ({ cards, deleteCard }) => {
  const cardComponents = cards.map((card) => {
    return (
      <Card
        id={card.card_id}
        message={card.message}
        likeCount={card.like_count}
        deleteCard={deleteCard}
      ></Card>
    );
  });

  return <div className="cardlist">{cardComponents}</div>;
};

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      like_count: PropTypes.number.isRequired,
      board_id: PropTypes.number.isRequired,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
};

export default CardList;
