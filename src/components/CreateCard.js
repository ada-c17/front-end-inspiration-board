import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "./Container";

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
    <div className="card p-2 m-2" style={{ width: "18rem" }}>
      <form onSubmit={submitCreateCardData} className="d-flex flex-column">
        <Container title="New Message" />
        <input className="m-2" value={newMessage} onChange={handleChange} />
        <button className="btn btn-primary m-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

CreateCard.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};