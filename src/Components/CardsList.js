import PropTypes from "prop-types";
import Card from "./Card";

const CardsList = ({ cards }) => {
  const getCardsList = (cards) => {
    return cards.map((card) => {
      return (
        <Card key={card.card_id} id={card.card_id} message={card.message} />
      );
    });
  };
  return <ul className="cards_list"> {getCardsList(cards)} </ul>;
};

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardsList;
