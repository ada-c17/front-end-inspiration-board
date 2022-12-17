import { useState } from "react";
import "./CardForm.css";
import PropTypes from 'prop-types';

const CardForm = (props) => {
  // need to get board id as prop?
  const defaultCard = { message: "", board_id: null };

  const [oneCardData, setData] = useState(defaultCard);

  const getFormValues = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newCardData = { ...oneCardData };
    newCardData[name] = value;
    newCardData["board_id"] = props.board_id;
    setData(newCardData);
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.createNewCardCallback(oneCardData);
    setData(defaultCard);
  };

  return (
    <form className="card-form" onSubmit={submitForm}>
      <h2>Create A New Card:</h2>
      <label htmlFor="message">Message:</label>
      <input
        type="text"
        name="message"
        value={oneCardData.message}
        onChange={getFormValues}
      ></input>
      <input type="submit" onChange={getFormValues}></input>
    </form>
  );
};

CardForm.propTypes = {
  createNewCardCallback: PropTypes.func.isRequired,
  board_id: PropTypes.number
}

export default CardForm;
