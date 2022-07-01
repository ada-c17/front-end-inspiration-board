import PropTypes from "prop-types";
import Card from "./Card";

const CardsList = ({ cards, onClickDeleteCard }) => {
  const getCardsList = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.card_id}
          id={card.card_id}
          message={card.message}
          onClickDeleteCard={onClickDeleteCard}
        />
      );
    });
  };
  return <ul className="cards_list"> {getCardsList(cards)} </ul>;
};

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      onClickDeleteCard: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default CardsList;
