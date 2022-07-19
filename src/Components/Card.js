import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ id, likes_count, message, onLikeClick, onClickDeleteCard }) => {
  return (
    <li className="card-container">
      <p className="card-message">{message}</p>
      <div className="emoji-div">
        <button onClick={() => onLikeClick(id)} className="card-buttons">
          {likes_count} ❤️
        </button>
        <button className="card-buttons" onClick={() => onClickDeleteCard(id)}>
          ✂️
        </button>
      </div>
    </li>
  );
};
Card.propTypes = {
  message: PropTypes.string.isRequired,
  onLikeClick: PropTypes.func.isRequired,
  onClickDeleteCard: PropTypes.func.isRequired,
};

export default Card;
