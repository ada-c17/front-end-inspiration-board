import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';

const Cards = ({ cardId, message, likesCount, likeHeart, handleLike }) => {
  // const handleLike = () => {
  //   axios
  //     .patch(`https://back-end-inspiration-board.herokuapp.com/cards/${cardId}`)
  //     .then(() => {
  //       reloadBoard();
  //     });
  // };
  const likeClick = () => {
    handleLike(cardId);
  };
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <FontAwesomeIcon icon={faTrashCan} />
          {message}
        </Card.Body>
        <Card.Footer>
          <FontAwesomeIcon icon={likeHeart} onClick={likeClick} /> {likesCount}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Cards;
