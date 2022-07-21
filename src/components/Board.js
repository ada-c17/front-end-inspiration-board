import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';

const Board = (props) => {
  const handleBoardSelect = () => {
    props.selectBoard(props);
  };

  const handleBoardDelete = () => {
    props.deleteBoard(props.id);
  };

  return (
    <li className="board__container">
      <div className="board__item" onClick={handleBoardSelect}>
        {props.title} by {props.owner}
      </div>
      <button
        className="button.board__item__remove"
        onClick={handleBoardDelete}
      >
        X
      </button>
    </li>
  );
};

export default Board;

// proptypes
Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  selectBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
};
