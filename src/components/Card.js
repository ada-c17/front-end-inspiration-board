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
    let likeData = await onLike(id);
    setCardData(likeData);
  };

  return (
    <section className="card-display">
    <div className="message">
      <button className="delete_X">X</button>
      <p className="message-text">{cardData.message}</p>
      <p className="likes">Likes: {cardData.likes}</p>
      <button className="like-button" onClick={handleLike}>
        👍
      </button>
    </div>
    </section>

  );
};

Card.propTypes = {
  onLike: PropTypes.func,
};

export default Card;
