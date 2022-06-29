import Card from "./Card.css";
// import PropTypes from "prop-types";
import { React } from "react";

const CardList = (props) => {
  const cardListArray = props.newCard.map((cardEntry) => {
    return (
      <Card
        message={cardEntry.message}
        id={cardEntry.id}
        key={cardEntry.id}
        liked={cardEntry.liked}
      />
    );
  });
  return cardListArray;
};

CardList.PropTypes = {};
export default CardList;
