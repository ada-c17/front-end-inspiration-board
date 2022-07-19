// import axios from "axios";
import "./CardsView.css";
import CardList from "./CardList";
import NewCardButton from "./NewCardButton";
import PropTypes from "prop-types";

const CardsView = ({ cards, deleteCard, submitCard, updateLikes, chosenBoard }) => {
  return (
    <div>
      <CardList
        cards={cards}
        deleteCard={deleteCard}
        updateLikes={updateLikes}
      ></CardList>
      <NewCardButton submitCard={submitCard} chosenBoard={chosenBoard}></NewCardButton>
  </div>
  );
};

CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      like_count: PropTypes.number.isRequired,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
  submitCard: PropTypes.func.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

export default CardsView;