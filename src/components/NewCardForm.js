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
  const [inputChar, setInputChar] = useState(0);

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newCardForm = { ...cardForm };
    newCardForm[stateName] = inputValue;

    setCardForm(newCardForm);
    setInputChar(inputValue.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addCardCallback(cardForm);
    setCardForm(defaultCard);
  };

  return (
    <section>
      <h3>Make a New Card</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          name="message"
          value={cardForm.message}
          maxLength={40}
          onChange={onFormChange}
        ></textarea>
        <input type="submit" value="Add inspiration"></input>
        <div>{inputChar}/40</div>
      </form>
    </section>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
