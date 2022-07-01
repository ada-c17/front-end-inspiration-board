import React, { useEffect } from 'react';
import CardsList from './CardsList';
import './stylesheet/Board.css';
import { useNavigate, useParams } from 'react-router-dom';

const Board = ({ boardData, getOneBoard, likeHeart }) => {
  let navigate = useNavigate();
  let { boardId } = useParams();

  useEffect(() => {
    getOneBoard(boardId);
    console.log('I ran!');
  }, []);
  // need [boardId]

  console.log('board cards: ', boardData.cards);

  if (boardData.cards === undefined || boardData === []) {
    return <h1> </h1>;
  }

  return (
    <div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Go Back to Boards From Board: {boardId}
      </button>

      <h1>
        Welcome to {boardData.owner}'s <em>{boardData.title}</em> Board!
      </h1>
      <li>
        <CardsList
          cardData={boardData.cards}
          likeHeart={likeHeart}
          reloadBoard={() => getOneBoard(boardId)}
        />
      </li>
    </div>
  );
};

export default Board;
