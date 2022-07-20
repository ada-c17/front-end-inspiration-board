import { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";

const defaultBoard = { title: "", owner: "" };

const NewBoardForm = (props) => {
  const [boardData, setBoardData] = useState(defaultBoard);

  const handleInputForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    const newBoardData = { ...boardData };
    newBoardData[name] = value;
    setBoardData(newBoardData);
  };

  const handleSubmissionForm = (event) => {
    event.preventDefault();
    props.handleSubmission(boardData);
    setBoardData(defaultBoard);
  };

  return (
    <form onSubmit={handleSubmissionForm} className="new-board-form">
      <input
        type="text"
        required
        name="title"
        placeholder="Enter Title"
        value={boardData.title}
        onChange={handleInputForm}
      />
      <input
        type="text"
        name="owner"
        placeholder="Enter owner name"
        required
        value={boardData.owner}
        onChange={handleInputForm}
      />
      <input className="button" type="submit" />
    </form>
  );
};

NewBoardForm.propTypes = {
  handleSubmission: PropTypes.func.isRequired,
};

export default NewBoardForm;
