import { useState } from "react";
import PropTypes from "prop-types";

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
    <form onSubmit={handleSubmissionForm}>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={boardData.title}
        onChange={handleInputForm}
      />
      <label>Owner</label>
      <input
        type="text"
        name="owner"
        value={boardData.owner}
        onChange={handleInputForm}
      />
      <input type="submit" />
    </form>
  );
};

NewBoardForm.propTypes = {
  handleSubmission: PropTypes.func.isRequired,
};

export default NewBoardForm;
