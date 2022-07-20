import PropTypes from "prop-types";
import { useState } from "react";
import "./BoardForm.css";

const defaultBoard = { title: "", owner: "" };

const BoardForm = ({ trigger, setNewBoardFormTrigger, newBoardSubmission }) => {
  const [boardData, setBoardData] = useState(defaultBoard);

  const handleBoardFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newBoardData = { ...boardData };
    newBoardData[name] = value;
    setBoardData(newBoardData);
  };

  const handleBoardFormSubmission = (event) => {
    event.preventDefault();
    newBoardSubmission(boardData);
    setBoardData(defaultBoard);
    setNewBoardFormTrigger(false);
  };
  return trigger ? (
    <div className="popup-board-form">
      <form
        onSubmit={handleBoardFormSubmission}
        className="board-form"
        id="new-board-form"
      >
        <h2>Add A New Board</h2>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          type="text"
          value={boardData.title}
          onChange={handleBoardFormInput}
          required
        />
        <label htmlFor="owner">Owner:</label>
        <input
          name="owner"
          type="text"
          value={boardData.owner}
          onChange={handleBoardFormInput}
          required
        />
        <label htmlFor="preview">Preview:</label>
        <input
          name="preview"
          type="text"
          value={boardData.title}
          onChange={handleBoardFormInput}
        />
        <br />
        <input type="submit" value="Submit" className="btn" />
        <button className="btn" onClick={() => setNewBoardFormTrigger(false)}>
          Close
        </button>
      </form>
    </div>
  ) : (
    ""
  );
};

BoardForm.propTypes = {
  newBoardSubmission: PropTypes.func.isRequired,
};

export default BoardForm;
