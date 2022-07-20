import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const clickLikeButton = () => {
    props.likeCardCallback(props.cardInfo);
  };

  const clickDeleteButton = () => {
    props.deleteCardCallback(props.cardInfo.id);
  };

  return (
    <div className="card-item" key={props.cardInfo.id}>
      <h3 className="card-item__message">{props.cardInfo.message}</h3>
      <ul className="card-item__controls">
        <li>{props.cardInfo.likes_count} </li>
        <li>💕</li>
        <li>
          <button className="card-likes" onClick={clickLikeButton}>
            +1
          </button>
        </li>
        <li>
          <button className="delete-card" onClick={clickDeleteButton}>
            delete
          </button>
        </li>
      </ul>
    </div>
  );
};

// create proptypes
Card.propTypes = {
  id: PropTypes.number,
  message: PropTypes.string,
  likes: PropTypes.number,
  onLike: PropTypes.func,
  onDelete: PropTypes.func,
  board_id: PropTypes.number,
};

export default Card;