import React, { useEffect, useState } from "react";
import "./BoardList.css";
import { Link } from "react-router-dom";
import EditBoardForm from "./EditBoardForm";
import axios from "axios";

// use effect and data is coming from the api calls below
let edit_board = {};
const BoardList = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get("https://inspiration-from-otterspace.herokuapp.com/boards")
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
        .delete(
          `https://inspiration-from-otterspace.herokuapp.com/boards/${boardID}`
        )
        .then((response) => {
          console.log("Deleted board");
          getBoardsFromAPI();
        })
        .catch((error) => {
          console.log("couldn't delete board");
          getBoardsFromAPI(boardID);
        });
    }
  };
  // function that calls a put api request to make a change in title field
  const editBoard = (boardID, new_title) => {
    axios
      .put(
        `https://inspiration-from-otterspace.herokuapp.com/boards/${boardID}`,
        { title: new_title }
      )
      .then((response) => {
        console.log("Board successfully updated");
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log("couldn't edit board");
      });
  };

  // sorting boards by name in alphabetical order or ascending order
  boards.sort((a, b) => a.title.localeCompare(b.title));

  // switcher between list of boards and editBoardForm
  const [showBoardsOrEdit, setShowBoardsOrEdit] = useState(true);
  const handleEditing = (id) => {
    setShowBoardsOrEdit(false);
    edit_board = boards.find((x) => x.id === id);
  };

  const onEditSubmission = (board) => {
    setShowBoardsOrEdit(true);
    editBoard(board.id, board.title);
  };

  return (
    <div>
      <p>
        The Multiverse is a concept about which we know frighteningly little.
      </p>
      {showBoardsOrEdit ? (
        <ul className="list">
          {boards.map((item) => (
            <li key={item.id} className="list-item">
              <div>
                {/* makes the cursor display as a pointer as part of styling */}
                <Link to={`${item.id}`} style={{ cursor: "pointer" }}>
                  {item.title}
                  {/* pointer is the cursor (hand) */}
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

export default BoardList;
