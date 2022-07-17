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
  const color = String(randomColor({ luminosity: "light" }));

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newCardData = { ...cardData };
    newCardData.message = value;
    newCardData.color = color;

    // newCardData[name] = value;
    console.log(newCardData);
    console.log(newCardData[name]);
    console.log(name);
    console.log(value);

    setCardData(newCardData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.handleSubmission(cardData);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <input
        name="message"
        type="text"
        placeholder="Enter New Message "
        value={cardData.message}
        onChange={handleFormInput}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

CardForm.propTypes = {
  handleSubmission: PropTypes.func.isRequired,
};

export default CardForm;
