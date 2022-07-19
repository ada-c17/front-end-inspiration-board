import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Container } from "./Container";

const defaultFormState = {
  message: "",
};

export const CreateCard = ({ boardId, onCreateCallBack }) => {
  const [newMessage, setNewMessage] = useState(defaultFormState.message);

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!boardId) {
      console.log("no board id");
      return;
    }
    const data = {
      board_id: boardId,
      message: newMessage,
    };

    axios
      .post("http://127.0.0.1:5000/cards", data)
      .then((response) => {
        console.log(response);
        const card = response.data.card;
        onCreateCallBack(boardId, card);
        setNewMessage(defaultFormState.message);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container title="Create Card">
      <form onSubmit={onSubmit} className="card">
        Message
        <input value={newMessage} onChange={handleChange} />
        <button type="submit" disabled={!newMessage}>
          Submit
        </button>
      </form>
    </Container>
  );
};

CreateCard.propTypes = {
  onCreateCallBack: PropTypes.func.isRequired,
};
