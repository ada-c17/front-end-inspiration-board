import React from "react";
// import PropTypes from "prop-types";

const Card = (props) => {
  console.log(props.message);
  const clickLikeButton = () => {
    props.likeCardCallback(props.id);
  };

  const clickDeleteButton = () => {
    props.deleteCardCallback(props.id);
  };

  return (
    <div className='card-item' key={props.id}>
      <p className='card-item__message'>{props.message}</p>
      <ul className='card-item__controls'></ul>
        <li><p>{props.likes_count} 💕</p></li>
        <button className="card-likes" onClick={clickLikeButton}></button>
      <button className="delete-card" onClick={clickDeleteButton}>delete</button>
    </div>
  );
};


//create proptypes
// Card.propTypes = {
//   id: PropTypes.number.isRequired,
//   message: PropTypes.string.isRequired,
//   likes: PropTypes.number.isRequired,
//   onLike: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   board_id: PropTypes.number.isRequired,
// };

export default Card;
