import { useState } from "react";
import PropTypes from "prop-types";

const NewBoardForm = (props) => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };

  const submitNewBoard = (event) => {
    event.preventDefault();
    props.createNewBoard({ title, owner });
    setTitle("");
    setOwner("");
  };

  return (
    <section className="collapse">
      <form onSubmit={submitNewBoard}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="board-input"
          placeholder="Title"
        ></input>
        <input
          type="text"
          value={owner}
          onChange={handleOwnerChange}
          className="board-input"
          placeholder="Owner"
        ></input>
        <input
          type="Submit"
          value="Add Board"
          disabled={
            title.length === 0 ||
            owner.length === 0 ||
            title.length > 40 ||
            owner.length > 40
          }
          className={
            title.length === 0 ||
            owner.length === 0 ||
            title.length > 40 ||
            owner.length > 40
              ? "board-button"
              : "board-button-grey"
          }
        ></input>
      </form>
    </section>
  );
};

NewBoardForm.propTypes = {
  createNewBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;
