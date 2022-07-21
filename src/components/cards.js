import React from "react";
import PropTypes from "prop-types";
import SingleCard from "./SingleCard.js";
import "./Cards.css";
import NewCardForm from "./NewCardForm.js";

const Cards = (props) => {
  if (props.cards === []) {
    return null;
  }
  const cardComponents = props.cards.map((card, index) => {
    return (
      <SingleCard
        key={index}
        card_id={card.card_id}
        message={card.message}
        likes_count={card.likes_count}
        deleteCardCallBack={props.deleteCardCallBack}
      ></SingleCard>
    );
  });
  return (
    <section className="cards-display">
      <section className="single-card-container">
        <section className="single-card">
          <NewCardForm
            addCardCallback={props.addCardCallback}
            boardId={props.boardId}
          />
        </section>
      </section>
      {cardComponents}
    </section>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number,
      message: PropTypes.string,
      likes_count: PropTypes.number,
      board_id: PropTypes.number,
    })
  ),
};

export default Cards;
