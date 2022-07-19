import React from "react";
import Card from "./cards.js";
import PropTypes from "prop-types";

const SingleBoard = (props) => {
  const clickMe = () => {
    props.setIsOnHomepage(false);
    console.log(props.board);
    props.setActiveBoard(props.board);
  };

  if (props.isOnHomepage) {
    return (
      <section onClick={clickMe}>
        <ul>
          <li>{props.board.owner}</li>
          <li>{props.board.title}</li>
          {/* <li>{props.board_id}</li> */}
        </ul>
      </section>
    );
  } else {
    return (
      <section onClick={clickMe}>
        <ul>
          <li>{props.board.owner}</li>
          <li>{props.board.title}</li>
          {/* <li>{props.board_id}</li> */}
        </ul>

        <Card activeBoard={props.board}></Card>
      </section>
    );
  }
};

SingleBoard.propTypes = {
  setIsOnHomepage: PropTypes.func.isRequired,
  isOnHomepage: PropTypes.bool.isRequired,
  setActiveBoard: PropTypes.func.isRequired,
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
