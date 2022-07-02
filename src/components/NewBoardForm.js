import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const default_board = { title: "", owner: "" };
const NewBoardForm = () => {
  const [boardData, setBoardData] = useState(default_board);
  const [message, setMessage] = useState("");

  const makeNewBoard = (data) => {
    axios
      .post("https://inspiration-from-otterspace.herokuapp.com/boards", data)
      .then((response) => {
        console.log("created board");
        console.log(response);
      })
      .catch(() => {
        console.log("couldn't create board");
      });
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
    console.log(boardData);
    event.preventDefault();
    if (boardData.title === "" || boardData.owner === "") {
      setMessage("Please enter both title and owner");
    } else {
      boardData.title = boardData.title
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");

      boardData.owner = boardData.owner
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");

      setMessage(`Board ${boardData.title} was created by ${boardData.owner}`);
      makeNewBoard(boardData);
    }
  };

  return (
    <>
      <Link to="/" className="HomeLink">
        Home is here
      </Link>
      <h1>Add New Space</h1>
      <form onSubmit={handleFormSubmission}>
        <input
          name="title"
          type="text"
          className="title"
          value={boardData.title}
          onChange={handleFormInput}
          placeholder="Enter Space Name"
        />
        <input
          name="owner"
          type="text"
          className="owner"
          value={boardData.owner}
          placeholder="Enter Space Owner"
          onChange={handleFormInput}
        />
        <input type="submit" value="Add" />
      </form>
      <p>{message}</p>
    </>
  );
};

export default NewBoardForm;
