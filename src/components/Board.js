import React, { useState } from "react";
import PropTypes from "prop-types";

const Board = () => {};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default Board;
