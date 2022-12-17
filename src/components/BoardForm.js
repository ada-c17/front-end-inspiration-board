import "./BoardForm.css";
import PropTypes from "prop-types";
import { useState } from "react";

const defaultBoard = { title: "", owner: "" };

const BoardForm = (props) => {
  const [boardInput, setBoardInput] = useState(defaultBoard);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newBoardInput = { ...boardInput };
    newBoardInput[name] = value;
    setBoardInput(newBoardInput);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.createBoardCallback(boardInput);
  };

  return (
    <section className="board-form">
      <form onSubmit={handleFormSubmission}>
        <h2>Create A New Board</h2>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={boardInput.title}
            onChange={handleFormInput}
          />
        </label>

        <label>
          Owner's Name:
          <input
            name="owner"
            type="text"
            value={boardInput.owner}
            onChange={handleFormInput}
          />
        </label>
        <input type="submit" />
      </form>
    </section>
  );
};

BoardForm.propTypes = {
  createBoardCallback:PropTypes.func.isRequired
}

export default BoardForm;
