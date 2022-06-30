import React from "react";
import { useNavigate } from "react-router-dom";

const BoardList = ({ boardData, cardData, likeHeart }) => {
  const createBoard = (board) => {
    return (
      <li>
        <a
          href="boards"
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
