import React from "react";
import PropTypes from "prop-types";
import SingleCard from "./SingleCard.js";
import "./Cards.css";
import NewCardForm from "./NewCardForm.js";
import PlusBox from "./PlusBox.js";

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
      <NewCardForm
        addCardCallback={props.addCardCallback}
        boardId={props.boardId}
        updating={props.updating}
      />
      <PlusBox setUpdating={props.setUpdating} elementType="card" />
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
  deleteCardCallBack: PropTypes.func.isRequired,
  addCardCallback: PropTypes.func.isRequired,
  boardId: PropTypes.number.isRequired,
  updating: PropTypes.bool.isRequired,
  setUpdating: PropTypes.func.isRequired,
};

export default Cards;
