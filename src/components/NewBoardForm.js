import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const defaultBoard = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [boardForm, setBoardForm] = useState(defaultBoard);

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newBoardForm = { ...boardForm };
    newBoardForm[stateName] = inputValue;

    setBoardForm(newBoardForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBoardCallback(boardForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={boardForm.title}
        onChange={onFormChange}
      />
      <label htmlFor="owner">Owner's Name</label>
      <input
        type="text"
        name="owner"
        value={boardForm.owner}
        onChange={onFormChange}
      />
      <input type="submit" value="Submit Query"></input>
    </form>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
