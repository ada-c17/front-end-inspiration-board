import React from "react";
import PropTypes from "prop-types";
import CardList from "./CardList";

const Board = ({ id, title, owner, cards }) => {
  // const cardsList = cards.map((card, index) => {
  //   return <li key={index}>{card}</li>;
  // });

  return (
    <>
      <h2>{title}</h2>
      <h2>{owner}</h2>
      <ul>
        <CardList cardData={cards} />
      </ul>
    </>
  );
};

export default Board;
