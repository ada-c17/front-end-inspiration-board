import React from "react";
// import PropTypes from "prop-types";

const Card = (props) => {
  console.log(props.message);
  const clickLikeButton = () => {
    props.onLike(props.id);
  };

  const clickDeleteButton = () => {
    props.deleteCardCallback(props.id);
  };

  return (
    <div>
      <section>{props.message}</section>
      <button className="card-likes" onClick={clickLikeButton}>
        {props.likes}💕
      </button>
      ;
      <button className="delete-card" onClick={clickDeleteButton}>
        delete
      </button>
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
