import React from "react";
import PropTypes from "prop-types";
import Board from "./Board";

const BoardList = ({ boardsData }) => {
  const boardComponents = boardsData.map((board) => {
    return (
      <Board
        key={board.board_id}
        title={board.title}
        owner={board.owner}
        cards={board.cards}
      />
    );
  });

  return (
    <>
      <h2>Boards</h2>
      <section>
        <ul>{boardComponents}</ul>
      </section>
    </>
  );
};

BoardList.propTypes = {
  boardsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoardList;
