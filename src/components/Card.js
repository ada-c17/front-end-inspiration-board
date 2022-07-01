import React from "react";
// import "./Board.css";

const Card = (props) => {
  const deleteCard = () => {
    props.deleteCard(props.id);
  };
  return (
    <div id="cardItem">
      <ul>
        {/* display message */}
        <li> Message: {props.message}</li>
        {/* display like count */}
        <li> Likes: {props.likes_count} </li>
        {/* display button to like the card */}
        <button className="cards__item">Like</button>
        {/* display button to delete the card */}
        <button className="deleteButton" onClick={deleteCard}>
          X
        </button>
      </ul>
    </div>
  );
};

export default Card;
