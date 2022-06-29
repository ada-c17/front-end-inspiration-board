import React from "react";
import Board from "./Board";
import PropTypes from "prop-types";
import "./boardlist.css";

const BoardList = (props) => {
  const boardComponents = props.boards.map((board) => {
    return (
      <section>
        <Board
          id={board.id}
          owner={board.owner}
          title={board.title}
          onUpdate={props.onUpdateBoard}
        ></Board>
      </section>
    );
  });
  return (
    <section>
      <ul className="">{boardComponents}</ul>
    </section>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      owner: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  onUpdateBoard: PropTypes.func.isRequired,
};
