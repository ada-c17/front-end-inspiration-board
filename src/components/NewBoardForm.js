import "./NewBoardForm.css";
import PropTypes from "prop-types";
import React, { useState } from "react";

const defaultBoard = { title: "", owner: "" };

const NewBoardForm = (props) => {
  const [boardData, setBoardData] = useState(defaultBoard);

  const createNewBoard = (event) => {
    event.preventDefault();
    // console.log(boardData);
    props.handleSubmission(boardData);
    setBoardData(defaultBoard);
  };

  const onInputChange = (event) => {
    setBoardData({ ...boardData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={createNewBoard} className="new_card_form">
      <section>
        <h2> Create a new board</h2>
        <div className="new_board_fields">
          <label htmlFor="title">
            New Board Title:
            <input
              type="text"
              name="title"
              value={boardData.title}
              onChange={onInputChange}
            />
          </label>
          <br />
          <label htmlFor="owner">
            New Board Owner:
            <input
              type="text"
              name="owner"
              value={boardData.owner}
              onChange={onInputChange}
            />
          </label>
          <br />
          <input type="submit" />
        </div>
      </section>
    </form>
  );
};

export default NewBoardForm;
