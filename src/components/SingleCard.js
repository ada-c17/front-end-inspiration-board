import React from "react";
import PropTypes from "prop-types";

const SingleCard = (props) => {
  return (
    <section>
      <ul>
        <li>{props.message}</li>
        <li>{props.likesCount}</li>
      </ul>
    </section>
  );
};

SingleCard.propTypes = {
  card_id: PropTypes.number,
  message: PropTypes.string,
  likes_count: PropTypes.number,
};

export default SingleCard;
