import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
    cardId,
    message,
    likesCount,
    boardId,
    onLikeCallback,
    onDeleteCallback,
    color
}) => {

    return (
        <div className="card__item" style={{backgroundColor: color}}>
            <p>
                {message}
            </p>
            <button
                className="liked"
                onClick={() => onLikeCallback(cardId)}
                style={{backgroundColor: color}}
            >
                {likesCount} ❤️
            </button>
            <button
                className="delete"
                onClick={() => onDeleteCallback(cardId)}
                style={{backgroundColor: color}}
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
    onLikeCallback: PropTypes.func.isRequired,
    onDeleteCallback: PropTypes.func.isRequired,
};
export default Card;