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
    <div className="board-form-container">
      <h4>Post new card for selected board</h4>
      <form onSubmit={handleSubmissionForm}>
        <table>
          <tr>
            <td>
              <label>Title</label>
            </td>
            <td>
              <input
                type="text"
                name="title"
                value={boardData.title}
                placeholder="Title of board"
                onChange={handleInputForm}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Owner</label>
            </td>
            <td>
              <input
                type="text"
                name="owner"
                value={boardData.owner}
                placeholder="Owner of the board"
                onChange={handleInputForm}
              />
            </td>
          </tr>
          <input type="submit" value="Submit" />
        </table>
      </form>
    </div>
  );
};

NewBoardForm.propTypes = {
  handleSubmission: PropTypes.func.isRequired,
};

export default NewBoardForm;
