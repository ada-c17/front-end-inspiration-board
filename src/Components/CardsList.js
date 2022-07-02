import PropTypes from "prop-types";
import Card from "./Card";

const CardsList = ({ cards, onClickDeleteCard, onLikeClick }) => {
  const getCardsList = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.card_id}
          id={card.card_id}
          message={card.message}
          likes_count={card.likes_count}
          onLikeClick={onLikeClick}
          onClickDeleteCard={onClickDeleteCard}
        />
      );
    });
  };
  return <ul className="cards-wrapper"> {getCardsList(cards)} </ul>;
};

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      onLikeClick: PropTypes.func.isRequired,
      onClickDeleteCard: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default CardsList;
