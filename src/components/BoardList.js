import React, { useState } from "react";
import "./BoardList.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import EditBoardForm from "./EditBoardForm";

let edit_board = {};
const BoardList = (props) => {
  props.boards.sort((a, b) => a.title.localeCompare(b.title));

  const [showInput, setShowInput] = useState(true);
  const handleEditing = (id) => {
    setShowInput(false);
    edit_board = props.boards.find((x) => x.id === id);
    console.log(edit_board);
  };

  const onEditSubmission = (board) => {
    // I should change it to true only after response from the database
    setShowInput(true);
    props.editBoard(board.id, board.title);
  };

  return (
    <div>
      {showInput ? (
        <ul className="list">
          {props.boards.map((item) => (
            <li key={item.id} className="list-item">
              <div>
                <Link to={`${item.id}`} style={{ cursor: "pointer" }}>
                  {item.title}
                </Link>
                <button
                  id="delete-board"
                  onClick={() => props.deleteBoard(item.id)}
                >
                  X
                </button>
                <span>
                  <button
                    id="edit-board"
                    onClick={() => handleEditing(item.id)}
                  >
                    ✐
                  </button>
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <EditBoardForm board={edit_board} onEditSubmission={onEditSubmission} />
      )}
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.array.isRequired,
};

export default BoardList;
