import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Card = (props) => {
  return (
    <div>
      <section className="card">
        <p>{props.message}</p>
        <Button text="❤️" onClick={() => props.onLike(props.cardId)}></Button> {props.likes_count}
        <Button text="✘" onClick={() => props.onDelete(props.cardId)}></Button>
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
