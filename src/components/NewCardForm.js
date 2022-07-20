import PropTypes from "prop-types";
import { useState } from "react";
import "./NewCardForm.css";

const defaultCard = { message: "" };

const NewCardForm = ({ chosenBoardId, handleSubmission }) => {
  const [cardData, setCardData] = useState(defaultCard);

  const handleFormInput = (event) => {
    const newCardData = { ...cardData };
    newCardData[event.target.name] = event.target.value;
    setCardData(newCardData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    handleSubmission(chosenBoardId, cardData);
    setCardData(defaultCard);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmission} className="card-form">
        <textarea
          name="message"
          type="text"
          value={cardData.message}
          onChange={handleFormInput}
          placeholder="Add a message (no more than 40 characters)"
          required
          className="input"
        />
        <input type="submit" value="+" className="btn" />
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  chosenBoardId: PropTypes.number.isRequired,
  handleSubmission: PropTypes.func.isRequired,
};

export default NewCardForm;
