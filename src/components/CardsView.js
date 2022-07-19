// import axios from "axios";
import "./CardsView.css";
import CardList from "./CardList";
import NewCardButton from "./NewCardButton";
import PropTypes from "prop-types";

const CardsView = ({
  cards,
  deleteCard,
  submitCard,
  updateLikes,
  chosenBoard,
  setChosenBoard,
}) => {
  const exitBoard = () => {
    setChosenBoard(null);
  };

  const funcOnSortChange = (event) => {
    const sortOption = document.getElementById("sortOptionsDropDown");
    sortOption.addEventListener("change", sortCards);
  };

  // have state for cards?   setCards()

  const sortCards = () => {
    let optionChosen = document.getElementById("sortOptionsDropDown").value;
    if (optionChosen === "sort alphabetically") {
      cards.sort((obj1, obj2) => (obj1.message > obj2.message ? 1 : -1));
    } else if (optionChosen === "sort by likes") {
      cards.sort((obj1, obj2) => (obj1.like_count > obj2.like_count ? 1 : -1));
    } else if (optionChosen === "sort by ID") {
      cards.sort((obj1, obj2) => (obj1.card_id > obj2.card_id ? 1 : -1));
    }
    setCards(cards);
  };

  return (
    <div>
      <button onClick={exitBoard}>Return to boards</button>
      <CardList
        cards={cards}
        deleteCard={deleteCard}
        updateLikes={updateLikes}
      ></CardList>
      <NewCardButton
        submitCard={submitCard}
        chosenBoard={chosenBoard}
      ></NewCardButton>
      <select id="sortOptionsDropDown" onSortChange={funcOnSortChange}>
        <option> sort alphabetically </option>
        <option> sort by likes </option>
        <option> sort by ID </option>
      </select>
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
