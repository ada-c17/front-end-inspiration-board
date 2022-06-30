import React from "react";

const Board = (props) => {
  const showBoard = () => {
    console.log("show board");
    props.selectedBoardCallBack(props.id);
  };
  return (
    <div>
      <div onClick={showBoard}>
        {props.id}. {props.title}
      </div>
    </div>
  );
};

export default Board;
