import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Card = (props) => {
  return (
    <div>
      <section className="card">
        <p>{props.message}</p>
        <Button text="❤️"></Button>
        <Button text="delete" onClick={() => props.onDelete(props.cardId)}></Button>
      </section>
    </div>
  );
};

Card.propTypes = {
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  onDelete: PropTypes.func
};

export default Card;
