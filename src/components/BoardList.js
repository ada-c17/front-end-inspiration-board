import React, { useEffect, useState } from "react";
import "./BoardList.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import EditBoardForm from "./EditBoardForm";
import axios from "axios";

let edit_board = {};
const BoardList = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get("/boards")
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log("Oh no!!!");
      });
  };

  const deleteBoard = (boardID) => {
    const board_name = boards.find((x) => x.id === boardID).title;

    // pop up window to confirm delete
    const confirm = window.confirm(
      `Are you sure you wish to delete the Space ${board_name}?`
    );
    if (confirm) {
      axios
        .delete(`/boards/${boardID}`)
        .then((response) => {
          console.log("Deleted board");
          getBoardsFromAPI();
        })
        .catch((error) => {
          console.log("couldn't delete board");
        });
    }
  };

  const editBoard = (boardID, new_title) => {
    axios
      .put(`/boards/${boardID}`, { title: new_title })
      .then((response) => {
        console.log("Board successfully updated");
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log("couldn't edit board");
      });
  };

  // sorting boards by name
  boards.sort((a, b) => a.title.localeCompare(b.title));

  // switcher between list of boards and editBoardForm
  const [showInput, setShowInput] = useState(true);
  const handleEditing = (id) => {
    setShowInput(false);
    edit_board = boards.find((x) => x.id === id);
  };

  const onEditSubmission = (board) => {
    setShowInput(true);
    editBoard(board.id, board.title);
  };

  return (
    <div>
      {showInput ? (
        <ul className="list">
          {boards.map((item) => (
            <li key={item.id} className="list-item">
              <div>
                <Link to={`${item.id}`} style={{ cursor: "pointer" }}>
                  {item.title}
                </Link>
                <button id="delete-board" onClick={() => deleteBoard(item.id)}>
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
