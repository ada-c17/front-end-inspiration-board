import { useState } from "react";
import "./Card.js";
import PropTypes from "prop-types";
import "./NewCardForm.css";

//change CSS classes
const NewCardForm = ({ addCardCallback, boardId }) => {
  const [cardData, setCardData] = useState({
    message: "",
  });

  const submitCardData = (e) => {
    e.preventDefault();
    const completeCardData = {
      message: cardData.message,
      likesCount: 0,
      boardId: boardId,
    };
    addCardCallback(completeCardData);
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
  boardId: PropTypes.number.isRequired
};

export default NewCardForm;
