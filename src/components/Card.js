import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
    cardId,
    message,
    likesCount,
    boardId,
    onLikeCallback,
    onDeleteCallback,
}) => {
    
    const heartFill = likes_count === true?  '❤️': '🤍';
    const [cards, setCards] = useState(cardData);
    const onLikeCallback=()=>{
        onUpdate(card_id)
        
    }
    const onUpdate=(id) =>{
        const newCard = cards.map((card) => {
            if (card.id === id){
                card.likes_count += 1;
            }
            return card;
        });
        setCards(newCard);
        
    }
    return (
        <div className="card__item">
            <p>
                {message}
            </p>
            <button
                className="liked"
                onClick={() => onLikeCallback(cardId)}
            >
                {likesCount} ❤️
            </button>
            <button
                className="delete"
                onClick={() => onDeleteCallback(cardId)}
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