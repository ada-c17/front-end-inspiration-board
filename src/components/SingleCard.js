import React, { useState } from "react";
import PropTypes from "prop-types";
import "./cards.css";
import axios from "axios";

const SingleCard = (props) => {
  const [likesCount, updateLikesCount] = useState(props.likes_count);

  const deleteSingleCard = () => {
    props.deleteCardCallBack(props.card_id);
  };

  const increaseLikeCount = () => {
    console.log("increaseLikeCount called");
    axios
      .patch(`http://shiver-of-sharks.herokuapp.com/cards/${props.card_id}`, {
        likes_count: likesCount + 1,
      })
      .then((response) => {
        /* Don't need to do anything with response */
      })
      .catch((error) => {
        console.log(<section>{error.response.data.message}</section>);
      });
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
        <button onClick={deleteSingleCard}>Delete</button>
      </p>
    </section>
  );
};

SingleCard.propTypes = {
  card_id: PropTypes.number,
  message: PropTypes.string,
  likes_count: PropTypes.number,
  deleteCardCallBack: PropTypes.func,
};

export default SingleCard;
