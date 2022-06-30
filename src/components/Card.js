import React from "react";

// Props needs to have the onLike function
const Card = (props) => {
  const handleLike = (event) => {
    props.onLike(event.card_id); // Need to update this with the correct pathway to the ID of the card
  };

  return (
    <>
      <h4>{props.likeCount} ❤️'s</h4>
      <button onClick={handleLike}>Like</button>
    </>
  );
};

export default Card;
