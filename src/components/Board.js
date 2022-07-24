import React from 'react';
import PropTypes from 'prop-types';

const Board = (props) => {
  return (
    <li className="board"
    onDoubleClick={() => props.onToggle(props.boardId, props.title, props.owner)}>
    <span className="white">{props.title}</span> by <span className="white">{props.owner}</span></li>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
  selected: PropTypes.bool
};

export default Board;
