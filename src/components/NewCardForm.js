import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Forms.css";

const kDefaultFormState = {
  message: "",
};

const NewCardForm = ({ onCardFormSubmit, onToggleVisible }) => {
  const [formData, setFormData] = useState(kDefaultFormState);
  const [isFormValid, setFormValid] = useState(false);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...formData, [fieldName]: fieldValue };

    setFormData(newFormData);
    setFormValid(fieldValue ? fieldValue.length <= 100 : false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCardFormSubmit(formData);
    setFormData(kDefaultFormState);
    setFormValid(false);
    onToggleVisible();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">message:</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={
              isFormValid ? "input--state-success" : "input--state-danger"
            }
          ></input>
        </div>
        <div>
          <input
            type="submit"
            value="add card"
            disabled={!isFormValid}
            className="submit-button"
          ></input>
        </div>
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  onCardFormSubmit: PropTypes.func.isRequired,
  onToggleVisible: PropTypes.func.isRequired,
};

export default NewCardForm;
