import "./card.css";

function Card(props) {
  const deleteCard = () => {
    props.deleteCardCallback(props.id);
  };

  const likeCard = () => {
    props.likeCardCallback(props.id);
  };
  return (
    <li>
      <div className="card-message">{props.message}</div>
      <div className="card-buttons">
        <button onClick={deleteCard} className="delete-card">
          Delete
        </button>{" "}
        <button onClick={likeCard} className="like">
          ♡
        </button>{" "}
        Likes: {props.likes}
      </div>
    </li>
  );
}

export default Card;
