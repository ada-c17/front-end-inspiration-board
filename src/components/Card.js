import "./card.css";

function Card(props) {
  const deleteCard = () => {
    props.deleteCardCallback(props.id);
  };
  return (
    <li>
      {props.message} <button onClick={deleteCard}>Delete</button>
    </li>
  );
}

export default Card;
