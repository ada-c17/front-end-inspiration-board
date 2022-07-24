import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Card = (props) => {
  return (
    <div>
      <section className="card">
        <p className="card-header">{props.message}
        <Button text="✘" onClick={() => props.onDelete(props.cardId)}></Button></p>
        <p className="like-btn"><Button text={`${props.likes_count} ❤️`} onClick={() => props.onLike(props.cardId)}></Button></p>
      </section>
    </div>
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number,
  onDelete: PropTypes.func,
  onLike: PropTypes.func
};

export default Card;
