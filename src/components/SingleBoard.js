import React from "react";
import PropTypes from "prop-types";

const SingleBoard = (props) => {
  const clickMe = () => {
    props.setIsOnHomepage(false);
    console.log(props.board);
    props.setActiveBoard(props.board);
  };
  return (
    <section className= "single-board" onClick={clickMe}>
      <ul>
        <li>{props.board.owner}</li>
        <li>{props.board.title}</li>
      </ul>
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
