import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = (props) => {
  // const viewBoard = () => {
  //   props.selectBoard(props.id);
  // };

  // map function to return buttons with title of each board
  const boardTitles = props.boardData.map((board) => {
    return (
      <Board
        boardId={board.boardId}
        title={board.title}
        creator={board.creator}
        selectBoard={props.selectBoard}
        cards={board.cards}
      ></Board>
    );
  });

  // const boardTitles = props.boardData.map((board) => {
  //   return <button onClick={viewBoard}>{board.title}</button>;
  // });

  // const boardTitles = props.boardData.map((board) => {
  //   const viewBoardById = () => {
  //     viewBoard();
  //   };
  //   return <button onClick={viewBoardById}>{board.title}</button>;
  // });

  return (
    <section>
      <h2>Need a little inspiration? Choose a board!</h2>
      <section>{boardTitles}</section>
    </section>
  );
};

BoardList.propTypes = {
  boardData: PropTypes.arrayOf(PropTypes.object).isRequired,
  // selectBoard: PropTypes.func.isRequired,
};

export default BoardList;
