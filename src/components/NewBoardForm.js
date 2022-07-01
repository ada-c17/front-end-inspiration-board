import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const default_board = { title: "", owner: "" };
const NewBoardForm = () => {
  const [boardData, setBoardData] = useState(default_board);
  const [message, setMessage] = useState("");

  const makeNewBoard = (data) => {
    axios
      .post("https://inspiration-from-otterspace.herokuapp.com/boards", data)
      .then(console.log("created board"))
      .catch(console.log("couldn't create board"));
  };

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
    makeNewBoard(boardData);
  };

  return (
    <>
      <Link to="/" className="HomeLink">
        Home is here
      </Link>
      <h1>Add New Board</h1>
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
        <input type="submit" />
      </form>
    </>
  );
};

export default NewBoardForm;
