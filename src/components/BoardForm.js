import "./BoardForm.js";
import PropTypes from "prop-types";
import { useState } from "react";

const default_board = { title: "", owner: "" };

const BoardForm = (props) => {
  const [boardData, setBoardData] = useState(default_board);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newBoardData = { ...boardData };
    newBoardData[name] = value;
    setBoardData(newBoardData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.handleSubmission(boardData);
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <label>Title</label>
      <input
        name="title"
        type="text"
        value={boardData.title}
        onChange={handleFormInput}
      />
      <label>Owner</label>
      <input
        name="owner"
        type="text"
        value={boardData.owner}
        onChange={handleFormInput}
      />
    </form>
  );
};

BoardForm.propTypes = {
  handleSubmission: PropTypes.func.isRequired,
};

export default BoardForm;
