import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
    card_id,
    message,
    likes_count,
    board_id,
    onLikeCallback,
    onDeleteCallback,
}) => {

    return (
        <div className="card__item">
            <p>
                {message}
            </p>
            <button
                className="liked"
                onClick={() => onLikeCallback(card_id)}
            >
                {likes_count} like
            </button>
            <button
                className="delete card"
                onClick={() => onDeleteCallback(card_id)}
            >
            delete card
            </button>
        </div>
    );
};

Card.propTypes = {
    card_id: PropTypes.number.isRequired,
    board_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    count_like: PropTypes.number.isRequired,
    onLikeCallback: PropTypes.func.isRequired,
    onDeleteCallback: PropTypes.func.isRequired,
};
export default Card;