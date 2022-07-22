import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../App.css";
import "./NewBoardForm.css";

const kDefaultFormState = {
  title: "",
  owner: "",
};

const NewBoardForm = ({ onBoardDataReady }) => {
  const [formData, setFormData] = useState(kDefaultFormState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const errorDisplay = document.getElementById("errorBoard");
    if (formData.title.length === 0) {
      if (formData.owner.length === 0) {
        errorDisplay.textContent = "Title and owner fields cannot be blank.";
      } else {
        errorDisplay.textContent = "Message cannot be empty.";
      }
    } else if (formData.owner.length === 0) {
      errorDisplay.textContent = "Owner cannot be empty.";
    } else {
      errorDisplay.textContent = "";
      await onBoardDataReady(formData);
      navigate("/");
      setFormData(kDefaultFormState);
    }
  }

  return (
    <div id="new-board-form">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add a Board</h3>
        <label>Board Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        ></input>
        <label>Owner</label>
        <input
          type="text"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
        ></input>
        <p id="errorBoard"></p>
        <input id="submit-button" type="submit" value="Add Board"></input>
      </form>
    </div>
  );
};

NewBoardForm.propTypes = {
  onBoardDataReady: PropTypes.func.isRequired,
};

export default NewBoardForm;
