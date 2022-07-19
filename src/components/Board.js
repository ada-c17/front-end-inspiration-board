import React, { useEffect } from 'react';
import CardsList from './CardsList';
import './stylesheet/Board.css';
import { useNavigate, useParams } from 'react-router-dom';
import AddNewCardForm from './NewCardForm';

const Board = ({
  boardData,
  getOneBoard,
  likeHeart,
  handleLike,
  deleteCard,
  submitCard,
}) => {
  let navigate = useNavigate();
  let { boardId } = useParams();

  useEffect(() => {
    getOneBoard(boardId);
  }, []);

  // console.log("board cards: ", boardData.cards);

  if (boardData.cards === undefined || boardData === []) {
    return <h1> </h1>;
  }

  return (
    <div className='container'>
      <h1 className='boardTitle'>
        {boardData.owner}'s '{boardData.title}' Board!
      </h1>
      <div className='board-nav'>
        <button
          onClick={() => {
            navigate('/');
          }}
          className='back-btn'
        >
          ← Back to Boards
        </button>
        <AddNewCardForm boardId={boardData.boardId} submitCard={submitCard} />
      </div>
      <section className='cardsList'>
        <CardsList
          cardData={boardData.cards}
          likeHeart={likeHeart}
          deleteCard={deleteCard}
          handleLike={handleLike}
        />
      </section>
    </div>
  );
};

export default Board;
