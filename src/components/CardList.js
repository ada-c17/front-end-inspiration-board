import "./CardList.css";
import Card from "./Card";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";


const CardList = (props) => {
<<<<<<< HEAD
  const cardComponents = (props) => {
    return props.cardsDisplayedOnBoard.map((card) => (
      <Card
        key={card.card_id}
        card_id={card.card_id}
        message={card.message}
        likes_count={card.likes_count}
        deleteCardCallback={props.deleteCardCallback}
        likeCardCallback={props.likeCardCallback}
      />
    ));
  };
  return (
    <div>
      <ul>{cardComponents(props)}</ul>;
    </div>
  );
};

CardList.propTypes = {
  cardsDisplayedOnBoard: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteCardCallback: PropTypes.func,
  likeCardCallback: PropTypes.func,
=======
    const cardComponents = (props) => {
        return props.cardsDisplayedOnBoard.map((card) => (
            <Card
                key={card.id}
                card_id={card.id}
                message={card.message}
                likes_count={card.likes_count}
                deleteCardCallback={props.deleteCardCallback}
                likeCardCallback={props.likeCardCallback}
            />
        ));
    };
    return <ul>{cardComponents(props)}</ul>;
};

CardList.propTypes = {
    cardsDisplayedOnBoard: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired,
        })
    ).isRequired,
    deleteCardCallback: PropTypes.func,
    likeCardCallback: PropTypes.func,
>>>>>>> b3ff03f62dd0f9dafe100bfe3d67a41bd1ea3039
};

export default CardList;
