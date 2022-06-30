import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = () => {
  const [likeCount, setLikeCount] = useState(0);
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default Card;
