import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  // const [likeCount, setLikeCount] = useState(0);

  const updateLikes = () => {
    props.onAddLike(props.id);
  };

  return (
    <section>
      <p>{props.message}</p>
      <button onClick={updateLikes}>{props.likeCount}💛</button>
    </section>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  onAddLike: PropTypes.func.isRequired,
};

export default Card;
