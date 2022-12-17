import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <section className="one-card">
      <p>{props.message}</p>
      <p>
        {props.likes} <span id="tree">🌴</span>s
      </p>
      <button
        className="card-button"
        onClick={() => {
          props.likeOneCardCallback(props.card_id);
        }}
      >
        Like
      </button>
      <button
        className="card-button"
        onClick={() => {
          props.deleteOneCardCallback(props.card_id);
        }}
      >
        Delete
      </button>
    </section>
  );
};

Card.propTypes = {
  message: PropTypes.string.isRequired,
  card_id: PropTypes.number.isRequired,
  board_id: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  deleteOneCardCallback: PropTypes.func.isRequired,
  likeOneCardCallback: PropTypes.func.isRequired,
}

export default Card;
