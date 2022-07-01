import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ id, likes_count, message, onLikeClick }) => {
  console.log("inside the card");
  return (
    <div className="card-container">
      <li className="single-card-message">{message}</li>
      <div className="likes-count">
        <li className="likes">{likes_count}</li>
        <button onClick={() => onLikeClick(id)} className="like-button">
          ❤️
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  message: PropTypes.string.isRequired,
  onLikeClick: PropTypes.func.isRequired,
};

export default Card;
