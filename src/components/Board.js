import React from 'react';
import PropTypes from 'prop-types';

const Board = (props) => {
  return (
    <li className={`${props.selected ? 'selected': ''}`}
    onDoubleClick={() => props.onToggle(props.boardId, props.title, props.owner)}>
    {props.title} by {props.owner}</li>
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
