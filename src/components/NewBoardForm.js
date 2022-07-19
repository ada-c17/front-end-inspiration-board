import React from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";
import { useState } from "react";

const defaultForm = {
  title: "",
  owner: "",
};

const NewBoardForm = (props) => {
  const [formData, setFormData] = useState(defaultForm);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    // make a new object based on form object
    const newForm = { ...formData };
    newForm[name] = value;
    // console.log(newForm);
    setFormData(newForm);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.makeBoardCallback(formData);
    props.handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <form onSubmit={handleFormSubmission}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleFormInput}
          ></input>
          <label>Owner</label>
          <input
            type="text"
            name="owner"
            value={formData.owner}
            onChange={handleFormInput}
          ></input>

          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};

NewBoardForm.propTypes = {
  makeBoardCallback: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default NewBoardForm;
