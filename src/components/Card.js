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
      <div>{props.message}</div>
      <button onClick={deleteCard}>Delete</button>{" "}
      <button onClick={likeCard}>Like</button> Likes: {props.likes}
    </li>
  );
}

export default Card;
