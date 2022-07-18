import React, { useEffect } from "react";
import CardsList from "./CardsList";
import "./stylesheet/Board.css";
import { useNavigate, useParams } from "react-router-dom";

const Board = ({
  boardData,
  getOneBoard,
  likeHeart,
  handleLike,
  deleteCard,
  setBoardData,
}) => {
  let navigate = useNavigate();
  let { boardId } = useParams();

  useEffect(() => {
    getOneBoard(boardId);
    console.log("I ran!");
  }, []);
  // need [boardId]

  console.log("board cards: ", boardData.cards);

  if (boardData.cards === undefined || boardData === []) {
    return <h1> </h1>;
  }

  return (
    <div className="container">
      <h1 className="boardTitle">
        {boardData.owner}'s '{boardData.title}'' Board!
      </h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="back-btn"
      >
        ← Back to Boards
      </button>
      <section className="cardsList">
        <CardsList
          cardData={boardData.cards}
          likeHeart={likeHeart}
          deleteCard={deleteCard}
          handleLike={handleLike}
          setBoardData={setBoardData}
        />
      </section>
    </div>
  );
};

export default Board;
