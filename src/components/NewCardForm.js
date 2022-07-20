import "./NewCardForm.css";
import PropTypes from "prop-types";
import React, { useState } from "react";

const defaultCard = { message: "" };

const NewCardForm = (props) => {
  const [cardData, setCardData] = useState(defaultCard);

  const createNewCard = (event) => {
    event.preventDefault();
    // console.log(cardData);
    props.handleSubmission(cardData);
    setCardData(defaultCard);
  };

  const onInputChange = (event) => {
    console.log("testing");
    setCardData(event.target.value);
  };

  return (
    <form onSubmit={createNewCard} className="new_card_form">
      <section>
        <h2> Create a new card</h2>
        <div className="new_card_field">
          <label htmlFor="message">
            Type your message:
            <input
              type="text"
              name="message"
              value={cardData.message}
              onChange={onInputChange}
            />
          </label>
          <br />
          <input type="submit" />
        </div>
      </section>
    </form>
  );
};

export default NewCardForm;
