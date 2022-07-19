import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = ({selectedCards, boardTitle, deleteCard, addLike }) => {
  const cardList = (selectedCards) => {
    return selectedCards.map((card) => {
      return (
        <Card
          key={card.cardId}
          boardId={card.boardId}
          cardId={card.cardId}
          message={card.message}
          likesCount={card.likesCount}
          deleteCard={deleteCard}
          addLike={addLike}
        />
      );
    });
  };
  return (
    <section className="cards">
      <h2 className="cardsTitle">Cards for <span>{boardTitle}</span> board</h2>
      {cardList(selectedCards)}
    </section>
  )
};

CardList.propTypes = {
  selectedCards: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      boardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  boardTitle: PropTypes.string.isRequired,
  addLike: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
}; 

export default CardList;