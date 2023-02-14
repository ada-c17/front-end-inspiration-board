import React, { useState } from "react";
import PropTypes from "prop-types";
import image from "../assets/thumbs-up.png";

const Card = ({
  id,
  boardId,
  message,
  likes,
  onLike,
  onDelete,
  getSelectedBoardData,
}) => {
  const [cardData, setCardData] = useState({
    id: id,
    boardId: boardId,
    message: message,
    likes: likes,
  });

  const handleLike = async (event) => {
    let likeData = await onLike(id);
    setCardData(likeData);
    getSelectedBoardData(boardId);
  };

  const handleDelete = () => {
    onDelete(id, boardId);
  };

  return (
    <section className="card-display">
      <div className="message">
        <button className="delete_X" onClick={handleDelete}>
          X
        </button>
        <p className="message-text">{cardData.message}</p>
        <p className="likes">Likes: {cardData.likes}</p>
        <button className="like-button" onClick={handleLike}>
          <img src={image} alt="thumbs-up" />
        </button>
      </div>
    </section>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  boardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  getSelectedBoardData: PropTypes.func.isRequired,
};

export default Card;
