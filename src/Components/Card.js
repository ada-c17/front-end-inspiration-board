import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ id, likes_count, message, onLikeClick, onClickDeleteCard }) => {
  console.log("inside the card");
  return (
    <li className="card-container">
      <p className="card-message">{message}</p>
      <div className="emoji-div">
        <p className="likes-count">{likes_count}</p>
        <button onClick={() => onLikeClick(id)} className="like-button">
          ❤️
        </button>
        <button className="delete-button" onClick={() => onClickDeleteCard(id)}>
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
