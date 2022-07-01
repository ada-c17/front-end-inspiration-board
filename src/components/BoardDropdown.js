import React from "react";

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
    <form>
      <label htmlFor="boards"></label>
      <select name="boards" id="board_dd_select" onChange={handleChange}>
        <option defaultValue>{props.boardOption}</option>
        {optionsJsx}
      </select>
    </form>
  );
};

export default BoardDropdown;
