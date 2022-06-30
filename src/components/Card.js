import React, {useState} from 'react';
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
                onClick={onLikeCallback}
            >
                {likes_count} {heartFill}
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