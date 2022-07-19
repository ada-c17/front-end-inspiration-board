import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Container } from "./Container";

const defaultFormState = {
  title: "",
  owner: "",
};

export const CreateBoard = ({ onCreateCallBack }) => {
  const [title, setTitle] = useState(defaultFormState.title);
  const [owner, setOwner] = useState(defaultFormState.owner);

  const handleChange = (handler) => (event) => {
    handler(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: title,
      owner: owner,
    };

    axios
      .post("http://127.0.0.1:5000/boards", data)
      .then((response) => {
        console.log(response);
        const board = response.data.board;
        onCreateCallBack(board);
        setTitle(defaultFormState.title);
        setOwner(defaultFormState.owner);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container title="Create Board">
      <form onSubmit={onSubmit} className="card">
        <label>Title</label>
        <input value={title} onChange={handleChange(setTitle)} />
        <label>Owner</label>
        <input value={owner} onChange={handleChange(setOwner)} />
        <button type="submit" disabled={!title || !owner}>
          Submit
        </button>
      </form>
    </Container>
  );
};

CreateBoard.propTypes = {
  onCreateCallBack: PropTypes.func.isRequired,
};
