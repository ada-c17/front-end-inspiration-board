import React from "react";
import PropTypes from "prop-types";
import "./BoardButton.css";

// const BoardButtons = ({ board_id, setBoardCallback }) => {
const BoardButton = (props) => {
  const id = props.board_id;
  const changeBoard = () => {
    console.log("You clicked the button!");
    // setBoardCallback(id);
  };
  return (
    <li className="button-item">
      <button type="button" className="button" onClick={() => changeBoard()}>
        Board {id}
      </button>
    </li>
  );
};

BoardButton.propTypes = {
  board_id: PropTypes.number.isRequired,
  // setBoardCallback: PropTypes.func.isRequired,
};

export default BoardButton;
