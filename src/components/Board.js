import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Board.css';

const Board = (props) => {
  const handleBoardSelect = () => {
    props.selectBoard(props);
    console.log('Working! Clicked!');
  };

  const handleBoardDelete = () => {
    props.deleteBoard(props.id);
  };

  return (
    <li className="board__container">
      <div className="board__item" onClick={handleBoardSelect}>
        {props.title}
      </div>
      <button
        className="button.board__item__remove"
        onClick={handleBoardDelete}
      >
        x
      </button>
    </li>
  );
};

export default Board;
