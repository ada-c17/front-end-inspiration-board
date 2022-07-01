import React from "react";

const Board = (props) => {
  // function to show selected board when user click on each board
  const showBoard = () => {
    props.selectedBoardCallBack(props.id);
  };
  return (
    <div key={props.id}>
      <div onClick={showBoard}>
        {props.id}. {props.title}
      </div>
    </div>
  );
};

// props type??

export default Board;
