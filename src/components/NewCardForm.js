import React, { useState } from "react";

const NewCardForm = (props) => {
  const [formData, setFormData] = useState({
    message: "",
  });

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newFormData = { ...formData };
    newFormData[stateName] = inputValue;

    setFormData(newFormData);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.addCardCallback({ message: formData.message });

    setFormData({ message: "" });
  };

  return (
    <section className="NewCardForm">
      <header>
        <h2>Add a New Card</h2>
        <p>to: {props.title}</p>
      </header>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={onFormChange}
        ></input>
        <input
          type="submit"
          value={
            formData.message.length >= 140 ? "Message too long" : "Add Card"
          }
          disabled={!formData.message || formData.message.length >= 140}
        ></input>
      </form>
    </section>
  );
};

export default NewCardForm;
