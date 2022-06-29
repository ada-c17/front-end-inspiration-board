import React from "react";
import Board from "./Board";

const BoardList = ({ boardData, cardData, likeHeart }) => {
  const createBoard = (board) => {
    return (
      <li>
        <a
          href="#"
          onClick={() => {
            getBoards(board);
          }}
        >
          {board.title}
        </a>
      </li>
      /* <Board
        key={board.board_id}
        title={board.title}
        owner={board.owner}
        cards={board.cards}
        cardData={cardData}
        likeHeart={likeHeart}
      /> */
    );
  };

  const getBoards = (e, board) => {
    console.log(e);
    return (
      <Board
        key={board.board_id}
        title={board.title}
        owner={board.owner}
        cards={board.cards}
        cardData={cardData}
        likeHeart={likeHeart}
      />
    );
  };
  return <ul>{boardData.map(createBoard)}</ul>;
};

export default BoardList;