import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = (props) => {
  const likeOnClick = () => {
    props.likeCardCallback(props.card_id);
  };

  const deleteOnClick = () => {
    props.deleteCardCallback(props.card_id);
  };

  return (
    <div className="card">
      <ul>
        <link
          href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
          rel="stylesheet"
        ></link>
        <li className="handwritten">{props.message}</li>
        <div className="bottomicon">
          <li>{props.likes_count} 💜</li>
          <button onClick={likeOnClick}>+ 💜</button>
          <button onClick={deleteOnClick}>🗑️</button>
        </div>
      </ul>
    </div>
  );
};

Card.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
      board_id: PropTypes.number.isRequired,
    })
  ),
  fetchCardsCallback: PropTypes.func.isRequired,
  likeCardCallback: PropTypes.func.isRequired,
  deleteCardCallback: PropTypes.func.isRequired,
};

export default Card;
