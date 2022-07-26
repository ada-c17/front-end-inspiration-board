import "./Card.css";
import PropTypes from "prop-types";

const Card = ({
  message,
  cardId,
  likesCount,
  boardId,
  onDeleteCallback,
  onLikeCallback,
}) => {
  return (
    <div className="card-interior">
        <p className="message">{message}</p>
        <div className="buttons-box">
        <p className="item-in-box">{likesCount} ❤️</p>
        <button
          onClick={() => {
            const newLikesCount = likesCount + 1;
            onLikeCallback({ message, newLikesCount, boardId, cardId });
          }}
          className="item-in-box"
        >
          +1
        </button>
        <button className="item-in-box" onClick={() => onDeleteCallback(cardId)}>Delete</button>
        </div>
    </div>
  );
};

Card.propTypes = {
  boardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
  onLikeCallback: PropTypes.func.isRequired
};

export default Card;
