import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import addNewBoardForm from "./NewBoardForm"
import "./stylesheet/BoardList.css";
import { Link } from "react-router-dom";
import AddNewBoardForm from "./NewBoardForm"

const BoardList = ({ boardData, setCurrentBoardId, deleteBoard }) => {
  let navigate = useNavigate();

  const createBoard = (board) => {
    return (
      <li>
        <Link
          to={`boards/${board.boardId}`}
          onClick={() => {
            navigate(`boards/${board.boardId}`);
          }}
        >
          {board.title}
        </Link>
        <button
          onClick={() => {
            deleteBoard(board.boardId);
          }}
        >
          Delete Board
        </button>
      </li>
    );
  };

  return (

    <section>
      <h1>Inspiration Board</h1>
      <ul>{boardData.map(createBoard)}</ul>
      <AddNewBoardForm />

    </section >
  );
};

export default BoardList;