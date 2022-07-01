import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ id, message, onClickDeleteCard }) => {
  console.log("inside the card");
  return (
    <li className="single-card">
      {message}
      <button className="delete-button" onClick={() => onClickDeleteCard(id)}>
        ✂️
      </button>
    </li>
  );
};
Card.propTypes = {
  message: PropTypes.string.isRequired,
  onClickDeleteCard: PropTypes.func.isRequired,
};

export default Card;
