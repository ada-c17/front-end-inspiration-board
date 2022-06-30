import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const defaultBoard = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [boardData, setBoardData] = useState(defaultBoard);

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newBoardData = { ...boardData };
    newBoardData[stateName] = inputValue;

    setBoardData(newBoardData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBoardCallback(boardData); // NJ: we don't have this function yet~
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={boardData.title}
        onChange={onFormChange}
      />
      <label htmlFor="owner">Owner's Name</label>
      <input
        type="text"
        name="owner"
        value={boardData.owner}
        onChange={onFormChange}
      />
      <input type="submit" value="Submit Query"></input>
    </form>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func,
};

export default NewBoardForm;
