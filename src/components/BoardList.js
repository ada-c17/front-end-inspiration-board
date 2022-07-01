import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import AddNewBoardForm from "./NewBoardForm"

const BoardList = ({ boardData, setCurrentBoardId, deleteBoard }) => {
  let navigate = useNavigate();

  const createBoard = (board) => {
    // console.log(board);
    return (
      <li>
        <a
          href="#"
          onClick={() => {
            navigate(`boards/${board.boardId}`);
          }}
        >
          {board.title}
        </a>
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