import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import "./Board.css";

const Board = ({ chosenBoardData, increaseLikes, deleteCardApp }) => {
  const boardTitle =
    chosenBoardData !== [] ? chosenBoardData.title : "Placeholder Board Title";

  const messageData = (chosenBoardData) => {
    if (chosenBoardData === []) {
      return "";
    } else {
      const data = chosenBoardData.cards.map((card) => {
        return (
          <Card
            key={card.card_id}
            cardId={card.card_id}
            boardId={card.board_id}
            message={card.message}
            likesCount={card.likes_count}
            increaseLikesCard={increaseLikes}
            deleteCardBoard={deleteCardApp}
          />
        );
      });
      return data;
    }
  };

  const messages = messageData(chosenBoardData);

  return (
    <div id="board">
      <h2>{boardTitle}</h2>
      <ul>{messages}</ul>
    </div>
  );
};

const cardObjectShape = {
  board_id: PropTypes.number,
  card_id: PropTypes.number,
  likes_count: PropTypes.number,
  message: PropTypes.string,
};

Board.propTypes = {
  increaseLikes: PropTypes.func.isRequired,
  chosenBoardData: PropTypes.shape({
    board_id: PropTypes.number,
    owner: PropTypes.string,
    title: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape(cardObjectShape)),
  }).isRequired,
};

export default Board;
