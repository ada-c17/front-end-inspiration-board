import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewCardForm.css";
import "../App.css";

const kDefaultFormState = {
  message: "",
};

const NewCardForm = ({ chosenBoard, onHandleCardDataReady }) => {
  const [formData, setFormData] = useState(kDefaultFormState);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...formData, [fieldName]: fieldValue };
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorDisplay = document.getElementById("error-message");
    if (chosenBoard.board_id === 0) {
      errorDisplay.textContent = "You must select a board.";
    } else if (formData.message.length > 40) {
      errorDisplay.textContent =
        "Message must contain fewer than 40 characters.";
    } else if (formData.message.length === 0) {
      errorDisplay.textContent = "Message cannot be empty.";
    } else {
      errorDisplay.textContent = "";
      onHandleCardDataReady(formData, chosenBoard.board_id);
      setFormData(kDefaultFormState);
    }
  };

  return (
    <div id="new-card-form">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Add a Card</h3>
        <label>Message</label>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></input>
        <p id="error-message"></p>
        <input className="submit-button" type="submit" value="Add Card"></input>
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  chosenBoard: PropTypes.shape({
    board_id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
  }).isRequired,
  onHandleCardDataReady: PropTypes.func.isRequired,
};

export default NewCardForm;
