import "./CardForm.css";
import PropTypes from "prop-types";
import { useState } from "react";

const randomColor = require("randomcolor");

const defaultCard = {
  message: "",
  color: "",
};

const CardForm = (props) => {
  const [cardData, setCardData] = useState(defaultCard);
  const [message, setMessage] = useState("");

  const color = String(randomColor({ luminosity: "light" }));

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const value = inputElement.value;
    const newCardData = { ...cardData };
    newCardData.message = value;
    newCardData.color = color;

    setCardData(newCardData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    if (cardData.message === "") {
      setMessage("Please enter the message");
    } else {
      props.handleSubmission(cardData);
      // reset card to default value
      setCardData(defaultCard);
      setMessage("");
    }
  };

  return (
    <div className="new-card">
      <section>{message}</section>
      <form onSubmit={handleFormSubmission}>
        <input
          maxLength={100}
          name="message"
          type="text"
          placeholder="Inspirational Words "
          value={cardData.message}
          onChange={handleFormInput}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

CardForm.propTypes = {
  handleSubmission: PropTypes.func.isRequired,
};

export default CardForm;
