import React from "react";
// import "./Board.css";
import "./Card.css";

const Card = (props) => {
  const deleteCard = () => {
    props.deleteCard(props.id);
  };
  const updateLike = () => {
    props.updateLike(props.id);
  };
  return (
    <div className="cardItem">
      {/* display message */}
      <p>{props.message}</p>
      {/* display like count */}
      <p>Likes: {props.likes_count}</p>
      {/* display button to like the card */}
      <p>
        <button className="cards__item" onClick={updateLike}>
          Like
        </button>
      </p>
      {/* display button to delete the card */}
      <p>
        <button className="deleteButton" onClick={deleteCard}>
          X
        </button>
      </p>
    </div>
  );
};

export default Card;
