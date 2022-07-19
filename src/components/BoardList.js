import React from "react";
import PropTypes from "prop-types";

const BoardList = (props) => {
  const viewBoard = (id) => {
    props.selectBoard(id);
  };

  // map function to return buttons with title of each board
  const boardTitles = props.boards.map((board) => {
    const viewBoardById = () => {
      viewBoard(board.id);
    };
    return <button onClick={viewBoardById}>{board.title}</button>;
  });

  return (
    <section>
      <h2>Need a little inspiration? Choose a board!</h2>
      <section>{boardTitles}</section>
    </section>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectBoard: PropTypes.func.isRequired,
};

export default BoardList;
