import React from "react";
import { useNavigate } from "react-router-dom";

const BoardList = ({ boardData, setCurrentBoardId }) => {
  let navigate = useNavigate();

  const createBoard = (board) => {
    // console.log(board);
    return (
      <li>
        <a
          href="#"
          onClick={() => {
            navigate(`boards/${board.boardId}`);
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

  // const getBoards = (e, board) => {
  //   console.log(e);
  //   return (
  //     <Board
  //       key={board.board_id}
  //       title={board.title}
  //       owner={board.owner}
  //       cards={board.cards}
  //       cardData={cardData}
  //       likeHeart={likeHeart}
  //     />
  //   );
  // };
  return <ul>{boardData.map(createBoard)}</ul>;
};

export default BoardList;
