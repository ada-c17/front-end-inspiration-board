import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div>
      <section>
        <p>{props.message}</p>
        <button>❤️</button>
        <button>delete</button>
      </section>
    </div>
  );
};

Card.propTypes = {
  cardId: PropTypes.number,
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number,
  boardId: PropTypes.number
};

export default Card;
