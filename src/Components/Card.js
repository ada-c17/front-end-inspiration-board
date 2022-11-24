import React from 'react';
import PropTypes from 'prop-types';
import './Styles/Card.css';
import UpdateCardForm from './Forms/UpdateCardForm';
import { TiDeleteOutline } from 'react-icons/ti';
import { BiHeartCircle } from 'react-icons/bi';
import { MdPushPin } from 'react-icons/md';

const Card = ({
    id,
    message,
    likeCount,
    updateLikes,
    deleteCard,
    updateCard,
}) => {
    return (
        <div className='Card'>
            <MdPushPin className='pin-icons' size={30}></MdPushPin>
            <p className='Card-message'>{message}</p>
            <p className='Card-likes'>{likeCount}💞s</p>
            <div className='Card-buttons'>
                <BiHeartCircle
                    className='card-icons'
                    size={20}
                    onClick={() => updateLikes(id)}
                />
                <TiDeleteOutline
                    className='card-icons'
                    size={20}
                    onClick={() => deleteCard(id)}
                />
            </div>
            <UpdateCardForm updateCardCallback={updateCard} cardId={id} />
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likeCount: PropTypes.number.isRequired,
    updateLikes: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
};

export default Card;
