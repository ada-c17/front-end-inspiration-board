import "./CardForm.css";
import PropTypes from "prop-types";
import { useState } from "react";

const defaultCard = { message: "" };

const CardForm = (props) => {
  const [cardData, setCardData] = useState(defaultCard);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newCardData = { ...cardData };
    newCardData[name] = value;
    console.log(newCardData);
    setCardData(newCardData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    console.log(props);
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
