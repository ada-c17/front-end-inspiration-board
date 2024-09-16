import Card from './Card';
import './CardList.css';
import PropTypes from 'prop-types';

const CardList = (props) => {
  const cardElements = props.cardData.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        message={card.message}
        likes={card.likes}
        addOneLike={props.addOneLike}
        deleteCard={props.deleteCard}
      ></Card>
    );
  });

  //beauty
  return (
    <>
      <div>
        <section className="card-list">{cardElements}</section>
      </div>
    </>
  );
};

export default CardList;

// proptypes
CardList.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
  addOneLike: PropTypes.func.isRequired,
};
