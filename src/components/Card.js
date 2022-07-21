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
    <div className="NewCard">
      <section className="message">
        <p>{message}</p>
        <p>{likesCount}</p>
        <button
          onClick={() => {
            const newLikesCount = likesCount + 1;
            onLikeCallback({ message, newLikesCount, boardId, cardId });
          }}
          className="like"
        >
          +1
        </button>
        <button onClick={() => onDeleteCallback(cardId)}>Delete</button>
      </section>
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
