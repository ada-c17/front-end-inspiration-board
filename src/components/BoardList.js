import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";

const BoardList = ({ boards, onBoardSelect }) => {
  const handleOnSelect = (event) => {
    onBoardSelect(JSON.parse(event.target.value));
  };

  const options = boards.map((board) => {
    return (
      <option key={board.boardId} value={JSON.stringify(board)}>
        {board.title} - {board.owner}
      </option>
    );
  });

  return (
    <div>
      <select
        className="board-selection-dropdown"
        onChange={handleOnSelect}
        name="boards"
      >
        <option>select a board</option>
        {options}
      </select>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      boardId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBoardSelect: PropTypes.func.isRequired,
};

export default BoardList;
