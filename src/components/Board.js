import React from "react";

const Board = () => {
  const board = { board_id: 1, title: "pick-me-up", owner: "Ada," };

  return (
    <div>
      <h2>BOARDS</h2>
      <ul>
        <li>
          {board.title} Owner: {board.owner}
        </li>
      </ul>
    </div>
  );
};

export default Board;
