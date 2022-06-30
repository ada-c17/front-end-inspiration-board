<<<<<<< HEAD
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
=======
const Board = (props) => {
    return (
    <div onClick={() => 
        props.onBoardSelect(props.board)}>{props.board.title}
    </div>
    );
};

export default Board;

>>>>>>> e4940a4d50115b9274f3b489b260ea867f71e5d7
