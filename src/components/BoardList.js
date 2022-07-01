import React from "react";
import { useNavigate } from "react-router-dom";
import "./stylesheet/BoardList.css";

const BoardList = ({ boardData, setCurrentBoardId }) => {
  let navigate = useNavigate();

  const createBoard = (board) => {
    return (
      <li>
        <a
          className="boardName"
          href="#"
          onClick={() => {
            navigate(`boards/${board.boardId}`);
          }}
        >
          {board.title}
        </a>
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
