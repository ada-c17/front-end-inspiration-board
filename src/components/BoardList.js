import { React, useState } from "react";
import { Container } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import addNewBoardForm from "./NewBoardForm";
import "./stylesheet/BoardList.css";
import { Link } from "react-router-dom";
import AddNewBoardForm from "./NewBoardForm";

const BoardList = ({ boardData, setCurrentBoardId, deleteBoard, submitBoard }) => {
  let navigate = useNavigate();

  const createBoard = (board) => {
    return (
      <li>
        <Link
          className="boardName"
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
      <Container fluid className="boardList">
        <h1 className="boardTitle">Inspiration Board</h1>
        <ul className="list">{boardData.map(createBoard)}</ul>
      </Container>

      <AddNewBoardForm
        submitBoard={submitBoard}

      />
    </section>
  );
};

export default BoardList;
