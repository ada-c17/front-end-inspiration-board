// import axios from "axios";
import React, { useState } from "react";
import "./NewCardForm.css";
import PropTypes from "prop-types";

const NewCardForm = ({ submitCard, buttonState }) => {
  const defaultCard = { message: "", like_count: 0 };
  const [cardData, setCardData] = useState(defaultCard);

  const handleCardFormInput = (event) => {
    const inputElement = event.target;
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

  return (
    <form onSubmit={handleCardFormSubmission}>
      <label htmlFor="message">Message</label>
      <input
        name="message"
        type="text"
        value={cardData.message}
        onChange={handleCardFormInput}
        id="message"
      ></input>
      <label htmlFor="like_count">Like Count</label>
      <input
        name="like_count"
        type="text"
        value={cardData.like_count}
        onChange={handleCardFormInput}
        id="like_count"
      ></input>
      <input type="submit" />
    </form>
  );
};
