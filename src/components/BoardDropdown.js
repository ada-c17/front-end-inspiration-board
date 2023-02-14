import React from "react";
import PropTypes from "prop-types";

const BoardDropdown = (props) => {
  const handleChange = (event) => {
    props.onDropdownChange(event.target.value);
  };

  const optionsJsx = props.boards.map((board, index) => {
    return (
      <option key={index} id={board["id"]} value={board["title"]}>
        {board["title"]}
      </option>
    );
  });

  return (
    <form className="dropdown">
      <label htmlFor="boards"></label>
      <select
        value={props.boardOption}
        name="boards"
        id="board_dd_select"
        onChange={handleChange}
      >
        <option defaultValue>{props.boardOption}</option>
        {optionsJsx}
      </select>
    </form>
  );
};

BoardDropdown.propTypes = {
  onDropdownChange: PropTypes.func.isRequired,
  boards: PropTypes.array.isRequired,
  boardOption: PropTypes.string.isRequired,
};

export default BoardDropdown;
