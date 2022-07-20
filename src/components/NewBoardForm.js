import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import galaxy from "../data/galaxy.jpg";
import "./NewBoardForm.css";
// import { attachClipboardStubToView } from "@testing-library/user-event/dist/types/utils";

// sets default values as empty to get user input from board form
const default_board = { title: "", owner: "" };
const NewBoardForm = () => {
  // setting up several states for functions that we will update such as the board form, message written, and quote received
  const [boardData, setBoardData] = useState(default_board);
  const [message, setMessage] = useState("");
  const [idVisible, setId] = useState("not-visible");

  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  // creates new 'post' board api call
  const makeNewBoard = (data) => {
    axios
      .post("https://inspiration-from-otterspace.herokuapp.com/boards", data)
      .then((response) => {
        console.log("created board");
        setBoardData(default_board);
      })
      .catch(() => {
        console.log("couldn't create board");
      });
  };

  // code to create an input form to be submitted by user
  // this gets the user name value
  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newBoardData = { ...boardData };
    newBoardData[name] = value;
    setBoardData(newBoardData);
  };
  // preventdefault allows the default dom behaviour to be cancelled,
  // and actually use the code written in form submission
  const handleFormSubmission = (event) => {
    event.preventDefault();
    // this allows a message to appear in the input button for title and owner in the board
    if (boardData.title === "" || boardData.owner === "") {
      setMessage("Please enter the name for the space and the creator");
    } else {
      // the two below functions makes the first letter of the first word and the second word, be capitalized
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
      // a message appears below the form to let us know a board space was created succesfully
      setMessage(
        `Newly Formed Universe ${boardData.title} was created by ${boardData.owner}. The cosmos have spoken and it sends you :`
      );
      setId("visible");

      makeNewBoard(boardData);

      onGetQuote();
    }
  };

  const onGetQuote = () => {
    axios
      .get(`https://inspiration-from-otterspace.herokuapp.com/zen`)
      .then((response) => {
        console.log(response.data[0]);
        setQuote(response.data[0].q);
        setQuoteAuthor(response.data[0].a);
      })
      .catch((error) => {
        console.log("Oh no!!!");
      });
  };

  // renders code from attachClipboardStubToView, the form submission, names and values for title and owner
  return (
    <>
      <Link to="/" className="HomeLink">
        <br />
        Return Home
      </Link>
      <h1>Quantum Realm</h1>
      <p className="story" id="first-line">
        Time.Space.Reality. It's more then a linear path. It's a prism of
        endless possibility, where a single choice can branch out into infinite
        realities, creating alternate worlds from the ones you know.
      </p>

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
          placeholder="Creator"
          onChange={handleFormInput}
        />
        <input type="submit" value="Big Bang" />
      </form>
      <p className="story">{message}</p>
      <p className="galaxy-text">"{quote}"</p>
      <p className="galaxy-text">{quoteAuthor}</p>
      <img src={galaxy} alt="loading..." className={idVisible} />
    </>
  );
};

export default NewBoardForm;
