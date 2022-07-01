import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesheet/BoardList.css";
import { Link } from "react-router-dom";

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
    <section className="boardList">
      <h1>Inspiration Board</h1>
      <ul>{boardData.map(createBoard)}</ul>
    </section>
  );
};

export default BoardList;
