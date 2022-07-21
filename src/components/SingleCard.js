import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Cards.css";
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
    <section className="single-card-container">
      <section className="single-card">{props.message}</section>
      <section className="box-footer">
        <button onClick={deleteSingleCard}>🗑</button>{" "}
        <button onClick={increaseLikeCount}>❤️</button> {likesCount}
      </section>
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
