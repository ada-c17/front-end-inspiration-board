// import axios from "axios";
import React, { useState } from "react";
import "./NewCardForm.css";
import PropTypes from "prop-types";

const defaultCard = { 
  message: "", 
  like_count: 0 
};

const NewCardForm = ({ submitCard, handleClose, chosenBoard }) => {
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
    submitCard(chosenBoard, cardData);
    setCardData(defaultCard);
    handleClose();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <form onSubmit={handleCardFormSubmission}>
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
      </div>
    </div>
  )
}

NewCardForm.propTypes={
  submitCard: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default NewCardForm;
