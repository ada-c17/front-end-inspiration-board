import React from "react";
import PropTypes from "prop-types";

//title, owner, id
//pass boards prop from app.js
//pass to dropdown which renders this into a dropdown of board to select
const Board = ({ id, title, owner, removeBoard }) => {
  return (
    <div>
      {title}
      {owner}
    </div>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  removeBoard: PropTypes.func.isRequired,
};

export default Board;
