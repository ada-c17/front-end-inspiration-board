import "./Card.css";
import PropTypes from "prop-types";

//props need to include -> function to delete card (button onClick handler)
//function to update likesCount (onClick handler)
//pass back information that include cardId and boardId-> function in App in that finds boardId
//cardId and modifies

const Card = ({ message, cardId, likesCount, boardId, onDeleteCallback }) => {
  console.log(cardId);
  return (
    <div className="NewCard">
      <section className="message">
        <p>{message}</p>
        <p>{likesCount}</p>
        <button className="like">+1</button>
        <button onClick={() => onDeleteCallback(cardId)}>Delete</button>
      </section>
    </div>
  );
};

Card.propTypes = {
  //Fill with correct proptypes
  boardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default Card;
