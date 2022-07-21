import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardList = (props) => {
  const sortedCardData = props.cardData.sort((a, b) => {
    return a.cardId - b.cardId;
  });
  const cardComponents = sortedCardData.map((card) => {
    return (
      <Card
        id={card.cardId}
        message={card.message}
        likeCount={card.likesCount}
        // boardId={card.boardId}
        onAddLike={props.onAddLike}
        onDeleteCard={props.onDeleteCard}
      />
    );
  });

  return (
    <section>
      <ul>{cardComponents}</ul>
    </section>
  );
};

CardList.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddLike: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default CardList;
