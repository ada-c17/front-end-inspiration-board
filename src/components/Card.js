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
      {props.message} <button onClick={deleteCard}>Delete</button>{" "}
      <button onClick={likeCard}>+1</button> Likes: {props.likes}
    </li>
  );
}

export default Card;
