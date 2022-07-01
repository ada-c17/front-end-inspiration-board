import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

// const BoardButtons = ({ board_id, changeBoardCallback }) => {
const Button = ({ id, title, owner }) => {
  // const id = props.board_id;
  const changeBoard = () => {
    console.log("You clicked the button!");
    // changeBoardCallback({id});
  };
  return (
    <li className="button-item">
      <button type="button" className="button" onClick={() => changeBoard()}>
        <p>Board #: {id}</p>
        <p>Title: {title}</p>
        <p>Owner: {owner}</p>
      </button>
    </li>
  );
};

Button.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  // setBoardCallback: PropTypes.func.isRequired,
};

export default Button;
