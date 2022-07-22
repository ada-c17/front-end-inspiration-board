import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import "./BoardDropdown.css";
import "../App.css";

const BoardDropdown = ({ boardData, chooseBoard, chosenBoard }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownOptions = boardData.map((board) => {
    if (board.title === chosenBoard.title) {
      return (
        <option
          key={board.board_id}
          id={board.board_id}
          value={JSON.stringify(board)}
          selected
        >
          {board.title}
        </option>
      );
    } else {
      return (
        <option
          key={board.board_id}
          id={board.board_id}
          value={JSON.stringify(board)}
        >
          {board.title}
        </option>
      );
    }
  });

  const handleSelection = (event) => {
    const eventValue = JSON.parse(event.target.value);
    chooseBoard(eventValue);
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <div id="board-dropdown">
      <label id="heading" htmlFor="boardDropdown">
        Select a Board
      </label>
      <select
        defaultValue=""
        name="boardDropdown"
        id="boardDropdown"
        onChange={handleSelection}
      >
        <option value="" disabled />
        {dropdownOptions}
      </select>
    </div>
  );
};

const cardObjectShape = {
  board_id: PropTypes.number,
  card_id: PropTypes.number,
  likes_count: PropTypes.number,
  message: PropTypes.string,
};

const boardObjectShape = {
  board_id: PropTypes.number,
  owner: PropTypes.string,
  title: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.shape(cardObjectShape)),
};

BoardDropdown.propTypes = {
  boardData: PropTypes.arrayOf(PropTypes.shape(boardObjectShape).isRequired)
    .isRequired,
  chooseBoard: PropTypes.func.isRequired,
  chosenBoard: PropTypes.shape(boardObjectShape).isRequired,
};

export default BoardDropdown;
