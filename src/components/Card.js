import "./Card.css";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="NewCard">
      <section className="message">
        <p>{props.message}</p>
        <p> props.likeCount</p>
        <button>+1</button>
        <button>Delete</button>
      </section>
    </div>
  );
};

Card.propTypes = {
  //Fill with correct proptypes
  board: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  likeCount: PropTypes.number.isRequired,
};

export default Card;
