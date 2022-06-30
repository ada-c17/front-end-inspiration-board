import Card from "./Card.css";
// import PropTypes from "prop-types";
import { React } from "react";

const CardList = (props) => {
  const cardListArray = props.cards.map((cardEntry) => {
    return (
      <Card
        message={cardEntry.message}
        cardId={cardEntry.cardId}
        key={cardEntry.cardId}
        liked={cardEntry.likesCount}
        boardId={cardEntry.boardId}
      />
    );
  });
  return cardListArray;
};

CardList.PropTypes = {};
export default CardList;
