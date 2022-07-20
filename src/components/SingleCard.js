import React, { useState } from "react";
import PropTypes from "prop-types";
import "./cards.css";

const SingleCard = (props) => {
  const [likesCount, updateLikesCount] = useState(props.likes_count);

  const deleteCard = () => {
    props.deleteCardCallBack(props.card_id);
  };

  const increaseLikeCount = () => {
    console.log("increaseLikeCount called");
    updateLikesCount(likesCount + 1);
  };

  return (
    <section className="single-card">
      <h2>Card</h2>
      <ul>
        <li>{props.card_id}</li>
        <li>{props.message}</li>
        <li>{likesCount}❤️</li>
      </ul>
      <p>
        <button onClick={increaseLikeCount}>Like</button>
      </p>
      <p>
        <button onClick={deleteCard}>Delete</button>
      </p>
    </section>
  );
};

SingleCard.propTypes = {
  card_id: PropTypes.number,
  message: PropTypes.string,
  likes_count: PropTypes.number,
};

export default SingleCard;
