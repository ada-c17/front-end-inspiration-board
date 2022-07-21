import React, { useState } from "react";
import PropTypes from "prop-types";

const kDefaultFormState = {
  message: "",
};

const NewCardForm = ({ onCardSubmit }) => {
  const [formFields, setFormFields] = useState(kDefaultFormState);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormFields = { ...formFields, [fieldName]: fieldValue };
    setFormFields(newFormFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onCardSubmit(formFields);

    setFormFields(kDefaultFormState);
  };

  return (
    <div className="new-card-form">
      <form className="form-content" onSubmit={handleSubmit}>
        <h2>Create a New Card</h2>
        <div>
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            value={formFields.message}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <input type="submit" value="Add card!"></input>
        </div>
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  onCardSubmit: PropTypes.func.isRequired,
};

export default NewCardForm;

/* <div>
<label htmlFor="creator"> Creator</label>
<input
  type="text"
  name="creator"
  value={formFields.creator}
  onChange={handleChange}
></input>
</div> */
