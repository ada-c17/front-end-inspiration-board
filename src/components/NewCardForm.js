import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const defaultCard = {
  message: "",
  likes_count: 0,
  board_id: 0,
};

const NewCardForm = (props) => {
  const [cardForm, setCardForm] = useState(defaultCard);

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newCardForm = { ...cardForm };
    newCardForm[stateName] = inputValue;

    setCardForm(newCardForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addCardCallback(cardForm);
    setCardForm(defaultCard);
  };

  return (
    <section>
      <h2>Make a New Card</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          value={cardForm.message}
          onChange={onFormChange}
        ></input>
        <input type="submit" value="Add inspiration"></input>
      </form>
    </section>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
