import { useState } from "react";
import PropTypes from "prop-types";
import "./CardForm.css";

const defaultCard = { message: "" };
const CardForm = (props) => {
  const [cards, setCards] = useState(defaultCard);

  const handleFormInput = (event) => {
    const domNode = event.target;
    const message = domNode.name;
    const value = domNode.value;
    const newCards = { ...cards };
    newCards[message] = value;
    setCards(newCards);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.handleFormSubmission(cards);
    setCards(defaultCard);
  };

  return (
    <form onSubmit={handleFormSubmission} className="card-submit-form">
      <label>Message</label>
      <input
        className="message-input"
        type="text"
        required
        name="message"
        maxLength={40}
        placeholder="Max 40 chars"
        value={cards.message}
        onChange={handleFormInput}
      ></input>
      <input className="button" type="submit" value="Submit" />
    </form>
  );
};

CardForm.propTypes = {
  handleFormSubmission: PropTypes.func.isRequired,
};

export default CardForm;
