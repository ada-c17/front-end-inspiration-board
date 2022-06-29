import React from "react";
import "./Board.js";
import PropTypes from "prop-types";

const NewBoardForm = ({ boardId, owner, title }) => {
  const handleBoard = () => {
    const updatedEntry = {
      boardId: boardId,
      owner: owner,
      title: title,
    };

    let x = document.getElementsByClassName("board");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    handleBoard(updatedEntry);
  };

  return (
    <div className="new-entry local">
      <button className="board" onClick={handleBoard}>
        Show/Hide Board
      </button>
      <h2 className="entry-name">{owner}</h2>
      <section className="entry-bubble">
        <p>{title}</p>
      </section>
    </div>
  );
};

NewBoardForm.propTypes = {
  boardId: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewBoardForm;
