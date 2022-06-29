import React from "react";

const Board = (props) => {
  return (
    <div>
      <ul>
        <li>
          {props.title} Owner: {props.owner}
        </li>
      </ul>
    </div>
  );
};

export default Board;
