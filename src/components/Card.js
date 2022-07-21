// import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ({card_id, message, likes_count, increaseLikes, deleteCard}) => {

  const handleLikeButton = () => {
    increaseLikes(card_id);
  }; 

  const deleteCardButton = () => {
    deleteCard(card_id)
  }

  return (
    <div className='cards'>
      <h2 className='card_message'>{message}</h2>
      <div className='like'>{likes_count} 👍 </div>
      <ul>
          <button className='likes_button' onClick={handleLikeButton}>Like</button>
          <button className='delete_button' onClick={deleteCardButton}>Delete Card</button>
      </ul>
    </div>
  )
};

Card.propTypes = {
  
      card_id: PropTypes.number,
      message: PropTypes.string,
      likes: PropTypes.number,
      increaseLikes : PropTypes.func,
      deleteCard : PropTypes.func,

  
  };


export default Card;