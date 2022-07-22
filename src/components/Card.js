import axios from "axios";
import { React, useState } from "react";
import "./Card.css";

export const Card = ({ id, message, likes, onRemoveCallback }) => {
  const [like, setLike] = useState(likes);

  const handleOnClick = () => {
    axios
      .patch(`https://swifties-inspo-board-6.herokuapp.com/cards/add-like/${id}`)
      .then((response) => {
        console.log(response);
        setLike(response.data.card.likes_count);
      })
      .catch(console.log);
  };

  const onRemove = () => {
    axios
      .delete(`https://swifties-inspo-board-6.herokuapp.com/cards/${id}`)
      .then((response) => {
        console.log(response);
        onRemoveCallback(id);
      })
      .catch(console.log);
  };

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <p className="card-text">{message}</p>
        <p className="card-like">{like}</p>
        <button
          
          onClick={handleOnClick}
          className="likeCount"
        >
          ❤️
        </button>
        <button className = "deleteCard" onClick={onRemove} >
          X
        </button>
      </div>
    </div>
  );
};
