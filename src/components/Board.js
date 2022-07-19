import React, { useState } from "react";
import PropTypes from "prop-types";
import CardList from "./CardList";

const Board = (props) => {
  return (
    (
      <h1>
        {" "}
        {props.title} by {props.creator}{" "}
      </h1>
    ),
    (
      <div>
        <CardList cards={props.cards} />
      </div>
    )
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default Board;
