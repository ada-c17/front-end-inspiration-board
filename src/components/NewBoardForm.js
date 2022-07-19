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
    setBoardForm(defaultBoard);
  };

  return (
    <section>
      <h3>Make a New Board</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Board Title</label>
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
        <input
          type="submit"
          value="Start a board"
          disabled={
            boardForm.title.length < 1 ||
            boardForm.owner.length < 1 ||
            boardForm.title.length > 40 ||
            boardForm.owner.length > 40
          }
        ></input>
      </form>
    </section>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
