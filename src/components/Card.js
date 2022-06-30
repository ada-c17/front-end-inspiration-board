import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = () => {
  const [likeCount, setLikeCount] = useState(0);
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  onAddLike: PropTypes.func.isRequired,
};

export default Card;
