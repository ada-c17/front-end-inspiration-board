import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
    cardId,
    message,
    likesCount,
    deleteCard,
    addLike
}) => {

    return (
        <div className="card__item">
            <p className="message">
                {message}
            </p>
            <p>
                {`Card ID: ${cardId}`}
            </p>
            <button
                className="liked"
                onClick={() => addLike(cardId)}
            >
                {likesCount} ❤️
            </button>
            <button
                className="delete"
                onClick={() => deleteCard(cardId)}
            >
            delete
            </button>
        </div>
    );
};

Card.propTypes = {
    cardId: PropTypes.number.isRequired,
    boardId: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    addLike: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
};
export default Card;