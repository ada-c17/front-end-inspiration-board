import React from "react";
import PropTypes from "prop-types";
import "./Board.css";
import Card from "./Card";
import "../css/inspo_board.css";
import SortDropdown from "./SortDropdown";

const Board = ({
  board,
  cardLike,
  boardTitle,
  cardOrder,
  cardSort,
  updateSortType,
  updateSortOrder,
  sortedData,
  deleteCard,
}) => {
  const sortedCards = sortedData?.map((card) => {
    return (
      <Card
        key={card.id}
        id={card.id}
        likes={card.likes}
        boardId={card.board_id}
        message={card.message}
        onLike={cardLike}
        onDelete={deleteCard}
      />
    );
  });

  return (
    <section className="board-content">
      <h1>
        Current Board: <br />
        {boardTitle}
      </h1>
      <SortDropdown
        cardOrder={cardOrder}
        cardSort={cardSort}
        updateSortType={updateSortType}
        updateSortOrder={updateSortOrder}
      />
      <section className="card-display">{sortedCards}</section>
    </section>
  );
};

Board.propTypes = {
  board: PropTypes.object.isRequired,
  onLike: PropTypes.func,
};

export default Board;
