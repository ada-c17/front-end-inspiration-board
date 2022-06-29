import React from "react";
import Board from "./Board";

const BoardList = ({ boardData, cardData }) => {
  const getBoardList = boardData.map((board) => {
    return (
      <Board key={board.board_id} title={board.title} owner={board.owner} />
    );
  });


  console.log(boardData);

  return (
    <section>
      <h1>Boardlist</h1>
      {/* {boardData.map(board => {
          // return (
          //   <Board
          //     key={board.board_id}
          //     title={board.title}
          //     owner={board.owner} />
          // ); */}
      <ul>{getBoardList}</ul>


      {/* <Board></Board> */}
    </section>
  );
};

export default BoardList;
