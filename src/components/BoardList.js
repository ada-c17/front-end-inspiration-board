import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const BoardList = ({ boardData, setCurrentBoardId, deleteBoard }) => {
  let navigate = useNavigate();

  const createBoard = (board) => {
    // console.log(board);
    return (
      <li>
        <Link
          to={`boards/${board.boardId}`}
          onClick={() => {
            navigate(`boards/${board.boardId}`);
          }}
        >
          {board.title}
        </Link>
        <button
          onClick={() => {
            deleteBoard(board.boardId);
          }}
        >
          Delete Board
        </button>
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
