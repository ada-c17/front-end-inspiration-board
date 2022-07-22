// import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ({card_id, message, likes_count, increaseLikes, deleteCard}) => {
  if (!likes_count) {
    likes_count = 0
  };

  const handleLikeButton = () => {
    increaseLikes(card_id);
    likes_count += 1;
  }; 

  const deleteCardButton = () => {
    deleteCard(card_id)
  }

  let likeButton = '🤍 '

  return (
    <div className='cards'>
      <h2 className='card_message'>{message}</h2>
      <div className='like'>
      <button className='likes_button' onClick={handleLikeButton}>{likeButton}</button>{likes_count}</div>
      <ul>
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