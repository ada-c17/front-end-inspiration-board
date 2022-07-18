import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Board.css';

const Board = (props) => {
  const handleBoardClick = () => {
    props.displayBoardTitle(props.title);
    console.log('Working! Clicked!');
    // will render Card List as well
  };

  return (
    <div onClick={handleBoardClick} className="Board">
      {props.title}
    </div>
  );
};

export default Board;
