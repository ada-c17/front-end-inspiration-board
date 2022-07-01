import axios from "axios";
import { React, useState } from "react";
import "./Card.css";

export const Card = ({ id, message, likes, onRemoveCallback }) => {
  const [like, setLike] = useState(likes);

  const handleOnClick = () => {
    axios
      .patch(`http://127.0.0.1:5000/cards/add-like/${id}`)
      .then((response) => {
        console.log(response);
        setLike(response.data.card.likes_count);
      })
      .catch(console.log);
  };

  const onRemove = () => {
    axios
      .delete(`http://127.0.0.1:5000/cards/${id}`)
      .then((response) => {
        console.log(response);
        onRemoveCallback(id);
      })
      .catch(console.log);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <p className="card-text">{message}</p>
        <p>{like}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleOnClick}
        >
          like
        </button>
        <button onClick={onRemove} type="button" className="btn btn-secondary">
          delete
        </button>
      </div>
    </div>
  );
};
