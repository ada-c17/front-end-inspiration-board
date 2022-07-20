import { useState } from "react";
import "./BoardList.css";

// code allowing us to edit the already existing title in the boardlist

const EditBoardForm = (props) => {
  const [boardData, setBoardData] = useState(props.board);
  const [message, setMessage] = useState("");

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
    if (boardData.title === "") {
      setMessage("Please enter the title");
    } else {
      // there is a problem with the order of operations. change later to update database first
      boardData.title = boardData.title
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");

      setBoardData(boardData);
      props.onEditSubmission(boardData);
    }
  };
  //   renders the edit form below
  return (
    <div className="edit-board">
      <form onSubmit={handleFormSubmission}>
        <div>Change the name of the Space here:</div>
        <input
          name="title"
          type="text"
          className="title"
          value={boardData.title}
          onChange={handleFormInput}
          // placeholder={boardData.title}
        />
        <input type="submit" value="Submit" />
      </form>
      <p>{message}</p>
    </div>
  );
};

export default EditBoardForm;
