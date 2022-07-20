import React from "react";
//import PropTypes from "prop-types";

const Card = (props) => {
  const clickLikeButton = () => {
    props.likeCardCallback(props.cardInfo);
  };

  const clickDeleteButton = () => {
    props.deleteCardCallback(props.cardInfo.id);
  };

  return (
    <div className="card-item" key={props.cardInfo.id}>
      <h3 className='card-item__message'>{props.cardInfo.message}</h3>
      <ul className="card-item__controls">
        <li>{props.cardInfo.likes_count} 💕</li>
        <button className="card-likes" onClick={clickLikeButton}>
          +1
        </button>
        <button className="delete-card" onClick={clickDeleteButton}>
          delete
        </button>
      </ul>
    </div>
  );
};

// create proptypes
// Card.propTypes = {
//   id: PropTypes.number.isRequired,
//   message: PropTypes.string.isRequired,
//   likes: PropTypes.number.isRequired,
//   onLike: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   board_id: PropTypes.number.isRequired,
// };

export default Card;