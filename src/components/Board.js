import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';
import './Board.css';

const Board = ({cards, increaseLikes, deleteCard}) => {
    console.log(cards);
    const getCards = cards.map((card) => {
        return (
        <Card 
            key={card.card_id}
            card_id={card.card_id}
            message={card.message}
            likes_count={card.likes_count}
            increaseLikes={increaseLikes}
            deleteCard={deleteCard}
        />
        );
    });

    return (
        <div className='board-general'>
            <div classname='board-title-image'></div>
            <section className='cards-list'>{getCards}</section>
        </div>);
}

Board.propTypes = {
    board_id: PropTypes.number,
    message: PropTypes.string, 
    increaseLikes: PropTypes.func, 
    likes_count: PropTypes.number,
    deleteCard: PropTypes.func,

}

export default Board;