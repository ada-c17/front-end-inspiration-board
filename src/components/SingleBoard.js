import React from "react";
import PropTypes from "prop-types";

const SingleBoard = (props) => {
  const deleteSingleBoard = () => {
    console.log(`Deleting board ${props.board.board_id}`);
    props.deleteBoardCallBack(props.board.board_id);
  };

  const clickMe = () => {
    props.setIsOnHomepage(false);
    console.log(props.board);
    props.setActiveBoard(props.board);
    props.setCards(props.board.cards);
  };
  return (
    <section className="single-board-container">
      <section className="single-board" onClick={clickMe}>
        <h2>{props.board.title}</h2>
        {props.board.owner}
      </section>
      <button onClick={deleteSingleBoard}>Delete</button>
    </section>
  );
};

SingleBoard.propTypes = {
  board: PropTypes.shape({
    board_id: PropTypes.number,
    title: PropTypes.string,
    owner: PropTypes.string,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        card_id: PropTypes.number,
        message: PropTypes.string,
        likes_count: PropTypes.number,
        board_id: PropTypes.number,
      })
    ),
  }),
};

export default SingleBoard;
