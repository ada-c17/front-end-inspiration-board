import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ id, title, owner, changeBoardCallback }) => {
  const changeBoard = () => {
    console.log("You clicked the button!", id);
    changeBoardCallback({ id });
  };

  return (
    <li className="button-item">
      <button type="button" className="button" onClick={changeBoard}>
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
  changeBoardCallback: PropTypes.func.isRequired,
};

export default Button;
