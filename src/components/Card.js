import React from "react";

const Card = ({ id, boardId, message, likes, onLike }) => {
  const handleLike = () => {
    onLike(id);
  };

  return "Natalia's code here";
};

export default Card;
