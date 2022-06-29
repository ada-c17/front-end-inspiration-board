import React from 'react';
import Board from './Board';

const BoardList = ({ boards }) => {
  const getBoardListJSX = (boards) => {
    return boards.map((board) => {
      return (
        <Board
          key={board.id}
          id={board.id}
          title={board.title}
          owner={board.owner}
        />
      );
    });
  };
  return <ul>{getBoardListJSX(boards)}</ul>;
};



export default BoardList;

