import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ title }) => {
  console.log("inside the board div");
  return <li className="single-board">{title}</li>;
};
Board.propTypes = {
  owner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Board;
