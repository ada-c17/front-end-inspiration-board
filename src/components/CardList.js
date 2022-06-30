import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './CardList.css';

const CardList = ({boardsData, onDeleteCallback, onLikeCallback}) => {
  const getCardList = (boardsData) => {
    return boardsData.map((card) => {
      return (
        <Card
          key={card.id}
          board_id={card.board_id}
          card_id={card.card_id}
          message={card.title}
          count_like={card.count_like}
          onLikeCallback={onLikeCallback}
          onDeleteCallback={onDeleteCallback}
        />
      );
    });
  }
  return (
    <>
      <h2>Display cards for {Card.board_id}</h2>;
      <ul> {getCardList(boardsData)}</ul>;
    </>
    

  )
};

CardList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      board_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      count_like: PropTypes.number.isRequired,
    })
  ).isRequired,
  onLikeCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
}; 

export default CardList;