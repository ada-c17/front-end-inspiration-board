import React from "react";
import CardList from "./CardList";
import NewBoardForm from "./NewBoardForm";
import NewCardForm from "./NewCardForm";
import PropTypes from "prop-types";

const Board = (props) => {
  const boardComponents = props.boards.map((board) => {
    return (
      <li key={board.id}>
        {board.title} by {board.owner}
      </li>
    );
  });

  return (
    <div>
      Hello I am Boards
      <ul>{boardComponents}</ul>
      <CardList></CardList>
      <NewBoardForm></NewBoardForm>
      <NewCardForm></NewCardForm>
    </div>
  );
};

Board.propTypes = {
  boards: PropTypes.array.isRequired,
  fetchBoardsCallback: PropTypes.func.isRequired,
};

export default Board;
