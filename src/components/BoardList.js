import React, { useState } from "react";
import "./BoardList.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BoardList = (props) => {
  props.boards.sort((a, b) => a.title.localeCompare(b.title));

  const [showInput, setShowInput] = useState(false);
  const handleEditing = () => setShowInput(true);

  const [boardData, setBoardData] = useState(props.boards);

  let viewMode = {};
  let editMode = {};

  if (showInput) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const title = inputElement.title;
    const value = inputElement.value;

    const newBoardData = { ...boardData };
    newBoardData[title] = value;
    setBoardData(newBoardData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    setShowInput(false);
    props.editBoard(boardData.id, boardData.title);
  };

  return (
    <div>
      <div>You have these spaces:</div>
      <ul className="list">
        {props.boards.map((item) => (
          <li key={item.id} className="list-item">
            <Link to={`${item.id}`} style={{ cursor: "pointer" }}>
              {item.title}
            </Link>
            <button
              id="delete-board"
              onClick={() => props.deleteBoard(item.id)}
            >
              X
            </button>
            {/* I can wrap it in view mode later */}
            <div style={viewMode}>
              <button id="edit-board" onClick={handleEditing}>
                ✐
              </button>
            </div>
            <form onSubmit={handleFormSubmission} style={editMode}>
              <input
                name="title"
                type="text"
                value={item.title}
                onChange={handleFormInput}
              />
              <input type="submit" />
            </form>
            {/* 
            <input
              // type="text"
              // style={editMode}
              className={textInput}
              value={title}
              onChange={(e) => {
                props.setUpdate(e.target.value, item.id);
              }}
              onKeyDown={handleUpdatedDone}
            /> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
