import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import './BoardList.css';

const BoardList = (props) => {
  const boardItems = props.boards.map((board) => {
    return (
      <Board
        key={board.id}
        id={board.id}
        title={board.title}
        owner={board.owner}
        selectBoard={props.selectBoard}
        deleteBoard={props.deleteBoard}
      />
    );
  });

  return <ul className="board-list">{boardItems}</ul>;
};

export default BoardList;
