import React from 'react';
import PropTypes from 'prop-types';

const Board = (props) => {
  return (
    <div>
      <section>
        <ul>
        <li>{props.title} by {props.owner}</li>
        </ul>
      </section>
    </div>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string
};

export default Board;
