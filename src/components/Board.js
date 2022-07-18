import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import CardList from "./CardList";
import CardForm from "./CardForm";
import "./Board.css";

const Board = (props) => {
  let params = useParams();

  const [boardData, setBoardData] = useState({
    cards: [],
    id: 0,
    owner: "",
    title: "",
  });

  const getBoardDatafromAPI = (id) => {
    axios
      .get(`/boards/${id}/cards`)
      .then((response) => {
        setBoardData(response.data);
      })
      .catch((error) => {
        console.log("couldn't call api");
        console.log(error);
      });
  };

  useEffect(() => {
    getBoardDatafromAPI(params.id);
  }, [params.id, boardData]);

  const setCardLikesCount = (id) => {
    console.log("inside setCardLikesCount", id);
    const updatedBoardData = boardData;
    const cardsList = [...updatedBoardData.cards];
    let targetCard;
    for (let card of cardsList) {
      if (card.id === id) {
        targetCard = card;
      }
    }
    axios
      .put(`/cards/${id}/like`)
      .then((response) => {
        targetCard.likes_count += 1;
        setBoardData(updatedBoardData);
      })
      .catch((error) => {
        console.log("couldn't add like");
      });
  };

  const deleteCard = (id) => {
    console.log("delete", id);
    const delUpdateBoard = boardData;
    const delCard = [...delUpdateBoard.cards];
    axios
      .delete(`/cards/${id}`)
      .then((response) => {
        const newCards = delCard.cards.filter((card) => card.id !== id);
        console.log(newCards);
        setBoardData(newCards);
      })
      .catch((error) => {
        console.log("Unable to delete");
      });
  };

  const makeNewCard = (data) => {
    console.log(data);
    axios
      .post(`/boards/${params.id}/cards`, data)
      .then((response) => {
        console.log(response);
        getBoardDatafromAPI(params.id);
      })
      .catch((error) => {
        console.log("Could not make a new card!");
      });
  };

  return (
    <div className="board">
      <Link to="/" className="HomeLink">
        Return Home
      </Link>
      <div id="board_title">Space {boardData.title}</div>
      <div id="board-owner"> belongs to: {boardData.owner}</div>
      <CardList
        data={boardData.cards}
        deleteCardCallBack={deleteCard}
        setLikesCountCallBack={setCardLikesCount}
      />
      <CardForm handleSubmission={makeNewCard} />
    </div>
  );
};

export default Board;
