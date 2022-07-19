import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./NewCardForm.css";

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
    <section className="cardFormContainer">
      <h3>
        <span className="handwritten">✨ Add a New Card ✨</span>
      </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message"></label>
        <textarea
          type="text"
          name="message"
          value={cardForm.message}
          maxLength={40}
          onChange={onFormChange}
          placeholder="Write your message here~ (max 40 char.)"
        ></textarea>
        <div>
          <input
            className="addCardButton"
            type="submit"
            value="Add Card"
            disabled={
              cardForm.message.length < 1 || cardForm.message.length > 40
            }
          ></input>
        </div>
        <div>{inputChar}/40</div>
      </form>
    </section>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
