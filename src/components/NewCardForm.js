import React from "react";
import { useState } from "react";
import "./Card.js";
import PropTypes from "prop-types";
import "./NewCardForm.css";

//change CSS classes
const NewCardForm = ({ addCardCallback, boardId }) => {
  console.log(boardId);
  const boardNum = boardId;
  const [cardData, setCardData] = useState({
    message: "",
    boardId: boardNum,
    likesCount: 0,
  });

  const submitCardData = (e) => {
    console.log(cardData);
    e.preventDefault();

    addCardCallback(cardData);
    setCardData({ message: "" });
  };

  const handleChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitCardData} className="new-card__form">
      <section>
        <h2>Add a Card</h2>
        <div className="new-card__fields">
          <label htmlFor="name">Message</label>
          <input
            name="message"
            id="message"
            value={cardData.message}
            onChange={handleChange}
            required
          />
          <button className="button new-card__submit" type="submit">
            Add Card
          </button>
        </div>
      </section>
    </form>
  );
};

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};

export default NewCardForm;
