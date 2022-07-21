import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";

const kDefaultFormState = {
  title: "",
  creator: "",
};

const NewBoardForm = ({ onBoardSubmit }) => {
  const [formFields, setFormFields] = useState(kDefaultFormState);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormFields = { ...formFields, [fieldName]: fieldValue };
    setFormFields(newFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onBoardSubmit(formFields);

    setFormFields(kDefaultFormState);
  };

  return (
    <div className="new-board-form">
      <form className="form-content" onSubmit={handleSubmit}>
        <h2>Create New Board</h2>

        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={formFields.title}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor="creator">Creator: </label>
          <input
            type="text"
            name="creator"
            value={formFields.creator}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <input
            className="submit-button"
            type="submit"
            value="Add board!"
          ></input>
        </div>
      </form>
    </div>
  );
};

NewBoardForm.propTypes = {
  onBoardSubmit: PropTypes.func.isRequired,
};

export default NewBoardForm;
