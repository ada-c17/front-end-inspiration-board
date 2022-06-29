import React from "react";
import CardsList from "./CardsList";
import "./stylesheet/Board.css";
import { useNavigate, useParams } from "react-router-dom";

const Board = ({ likeHeart, cards, cardData }) => {
  let navigate = useNavigate();
  let { boardId } = useParams();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back to Boards
      </button>
      <li>
        <CardsList
          cardData={cardData}
          boardCards={cards}
          likeHeart={likeHeart}
        />
      </li>
    </div>
  );
};

export default Board;
