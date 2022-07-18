import React, { useState } from "react";
import PropTypes from "prop-types";

const defaultFormState = {
  message: "",
};

export const CreateCard = ({ addCardCallback }) => {
  const [newMessage, setNewMessage] = useState(defaultFormState.message);

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const submitCreateCardData = (event) => {
    event.preventDefault();
    addCardCallback(newMessage);
    setNewMessage(defaultFormState.message);
  };

  return (
    <form onSubmit={submitCreateCardData} className="card">
      Message
      <input value={newMessage} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

CreateCard.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};
