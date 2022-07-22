import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";

//change CSS

const NewBoardForm = ({ addBoardCallback }) => {
  const [newBoardData, setNewBoardData] = useState({
    title: "",
    owner: "",
  });

  const submitBoardData = (e) => {
    e.preventDefault();

    addBoardCallback(newBoardData);
    setNewBoardData({ title: "", owner: "" });
  };

  const handleChange = (e) => {
    setNewBoardData({ ...newBoardData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitBoardData} className="new-board__form">
      <section>
        <h2>Add a Board</h2>
        <div className="new-board__fields">
          <label htmlFor="name">Title</label>
          <input
            name="title"
            id="title"
            value={newBoardData.title}
            onChange={handleChange}
            className={
              newBoardData.title.length === 0 || newBoardData.title.length > 40
                ? "invalid-input"
                : ""
            }
          />
          <label htmlFor="name">Owner</label>
          <input
            name="owner"
            id="owner"
            value={newBoardData.owner}
            onChange={handleChange}
            className={
              newBoardData.owner.length === 0 || newBoardData.owner.length > 40
                ? "invalid-input"
                : ""
            }
          />
          <button
            className="button new-board__submit"
            type="submit"
            disabled={
              newBoardData.title.length === 0 ||
              newBoardData.title.length > 40 ||
              newBoardData.owner.length === 0 ||
              newBoardData.owner.length > 40
            }
          >
            Add Board
          </button>
        </div>
      </section>
    </form>
  );
};

NewBoardForm.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};

export default NewBoardForm;
