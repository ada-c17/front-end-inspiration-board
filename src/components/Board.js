import React from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList'

const Board = (props) => {
  return (
    <div>
      <section>
        <p>{props.title}</p>
        <p>by {props.owner}</p>
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
