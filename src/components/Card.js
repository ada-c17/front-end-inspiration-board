import React from "react";
import PropTypes from "prop-types";

const Card = ({ card_id, message, likes_count }) => {
  return (
    <section>
      <ul>
        {card_id}
        {message} Likes: {likes_count}
      </ul>
    </section>
  );
};

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Card;
