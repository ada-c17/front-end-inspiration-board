import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="card-item">
      <p>{props.message}</p>
      <ul className="card-item__list">
        <li>{props.likes}💖</li>
        <li onClick={() => props.addOneLike(props)}>+1</li>
        <li onClick={() => props.deleteCard(props)}>Delete</li>
      </ul>
    </div>
  );
};

export default Card;

// proptypes
Card.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  addOneLike: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};
