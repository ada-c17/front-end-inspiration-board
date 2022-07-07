import React from "react";
import PropTypes from "prop-types";

const BoardList = (props) => {
  const viewBoard = () => {
    props.selectBoard();
  };

  // map function to return buttons with title of each board
  const boardTitles = props.boards.map((board) => {
    return <button onClick={viewBoard}>{board.title}</button>;
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
