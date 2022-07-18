import { useState } from "react";
import PropTypes from "prop-types";
import "./CardForm.css";
import Boards from "./Boards";

const defaultCard = { message: "" };
const CardForm = (props) => {
  const [cards, setCards] = useState(defaultCard);
  // const board_id = props.boards.board_id;

  const handleFormInput = (event) => {
    const domNode = event.target;
    const message = domNode.name;
    const value = domNode.value;
    // console.log(message);
    // console.log(value);
    const newCards = { ...cards };
    newCards[message] = value;
    setCards(newCards);
  };

  const handleFormSubmission = (event) => {
    console.log("inside card form");
    event.preventDefault();
    props.handleFormSubmission(cards);
  };

  return (
    <form onSubmit={handleFormSubmission} className="card-submit-form">
      <label>Message</label>
      <input
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
