// import axios from "axios";
import React, { useState } from "react";
import "./NewCardForm.css";
import PropTypes from "prop-types";

const NewCardForm = ({ submitCard, visibilityState }) => {
  const defaultCard = { message: "", like_count: 0 };
  const [cardData, setCardData] = useState(defaultCard);

  const handleCardFormInput = (e) => {
    const inputElement = e.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newCardData = { ...cardData };
    newCardData[name] = value;
    setCardData(newCardData);
  };

  const handleCardFormSubmission = (e) => {
    e.preventDefault();
    submitCard(cardData);
    setCardData(defaultCard);
  };

  const visibilityClass = visibilityState ? "visible" : "hidden";

  return (
    <form onSubmit={handleCardFormSubmission} className={visibilityClass}>
      <fieldset>
        <legend>Create a new card.</legend>
        <label htmlFor="message">Message</label>
        <input
          name="message"
          type="text"
          value={cardData.message}
          onChange={handleCardFormInput}
          id="message"
        ></input>
      <input type="submit" />
    </fieldset>
  </form>
  );
};
NewCardForm.propTypes={
  submitCard: PropTypes.func.isRequired,
  visibilityState: PropTypes.bool.isRequired,
}

export default NewCardForm;
