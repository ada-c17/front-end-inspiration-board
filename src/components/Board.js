import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({
  boardId, //parameters passed in as props
  title,
  owner,
  onSelectBoard,
  color,
  selectedBoardId,
}) => {
  const onBoardClick = () => {
    console.log(title); //where are these 3 console log shown up in board display?]
    console.log(boardId); //
    console.log(color); //
    onSelectBoard(boardId);
  };

  return (
    <>
      <section className="board-bubble">
        <button
          onClick={onBoardClick}//这是触发button function的方式
          style={{
            backgroundColor: color, //how does this work?
            height: selectedBoardId === boardId ? "10rem" : "5rem",
          }}
        > 
          <h1 className="boardId">{boardId}</h1>  {/*where there is no boardID shown up?*/}
          <h2>{title}</h2>
          <h3>By {owner} </h3>
        </button>
      </section>
    </>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  cards: PropTypes.array,
  color: PropTypes.string.isRequired,
  onSelectBoard: PropTypes.func,
  isSelected: PropTypes.bool, //why do we need this one?
};

export default Board;
