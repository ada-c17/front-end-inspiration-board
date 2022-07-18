import React, { useState } from "react";
import PropTypes from "prop-types";

const Card = ({ id, boardId, message, likes, onLike }) => {
  const [cardData, setCardData] = useState({
    id: id,
    boardId: boardId,
    message: message,
    likes: likes,
  });
  const handleLike = async (event) => {
    console.log("handleLike entered");
    console.log(id);
    let likeData = await onLike(id);
    console.log(likeData);
    setCardData(likeData);
  };

  return (
    <div className="message">
      <p className="message-text">{cardData.message}</p>
      <p className="likes">Likes: {cardData.likes}</p>
      <button className="like-button" onClick={handleLike}>
        👍
      </button>
    </div>
  );
};

Card.propTypes = {
  onLike: PropTypes.func,
};

export default Card;
