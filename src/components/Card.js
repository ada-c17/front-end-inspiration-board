import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import "./Card.css";

const Card = ({ cardData, deleteCard, addLike }) => {
  return (
    <div className="card">
      <div className="card-message">{cardData.message}</div>
      <div className="card-footer">
        <div className="action-button">
          {cardData.likes_count}
          <span onClick={() => addLike(cardData.board_id, cardData.card_id)}>
            💕
          </span>
          <span> </span>
        </div>
        <MdDelete
          className="action-button"
          size="22"
          onClick={() => deleteCard(cardData.board_id, cardData.card_id)}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    board_id: PropTypes.number.isRequired,
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
  }),
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
