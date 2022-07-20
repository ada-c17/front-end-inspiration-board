import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./NewBoardForm.css";

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
    <section className="boardform-container">
      <h2>Make a New Board</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={boardForm.title}
            onChange={onFormChange}
            className="input-title"
          />
        </div>
        <div>
          <label htmlFor="owner">Owner: </label>
          <input
            type="text"
            name="owner"
            value={boardForm.owner}
            onChange={onFormChange}
          />
        </div>
        <div className="button-container">
          <input
            className="startButton"
            type="submit"
            value="Add Board"
            disabled={
              boardForm.title.length < 1 ||
              boardForm.owner.length < 1 ||
              boardForm.title.length > 40 ||
              boardForm.owner.length > 40
            }
          ></input>
        </div>
      </form>
    </section>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
