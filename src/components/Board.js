import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Board.css";

import axios from "axios";
import CardList from "./CardList";
import CardForm from "./CardForm";

const Board = () => {
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
        console.log(response.data);
        setBoardData(response.data);
        console.log(boardData.cards);
        // !!!!!same problem here setBoardData return old data in console.log (it does not set cards for sure)
      })
      .catch((error) => {
        console.log("couldn't call api");
      });
  };

  useEffect(() => {
    getBoardDatafromAPI(params.id);
  }, [params.id]);
  //! I added boardData and then its started to rerender Card nonstop

  const setCardLikesCount = (id) => {
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
        // !!!!!why this setBoardData do not rerender the board component?
        setBoardData(updatedBoardData);
        // if it will rerender we do not need to call getBoardDataFromAPI
        getBoardDatafromAPI(params.id);
      })
      .catch((error) => {
        console.log("couldn't add like");
      });
  };

  const deleteCard = (id) => {
    axios
      .delete(`/cards/${id}`)
      .then((response) => {
        const newCards = boardData.cards.filter((card) => card.id !== id);
        setBoardData(newCards);
      })
      .catch((error) => {
        console.log("Unable to delete");
      });
  };

  const makeNewCard = (data) => {
    axios
      .post(`/boards/${params.id}/cards`, data)
      .then((response) => {
        getBoardDatafromAPI(params.id);
      })
      .catch((error) => {
        console.log("Could not make a new card!");
      });
  };

  const updatePos = (data, id) => {
    console.log(data, id);
    axios
      .put(`/cards/${id}`, {
        PosX: data.x,
        PosY: data.y,
      })
      .then((response) => {
        console.log("Card position sucessfully updated!");
        getBoardDatafromAPI(params.id);
      })
      .catch((error) => {
        console.log("Could not update a  position of the card!");
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
        updatePos={updatePos}
        deleteCardCallBack={deleteCard}
        setLikesCountCallBack={setCardLikesCount}
      />
      <CardForm handleSubmission={makeNewCard} />
    </div>
  );
};

export default Board;
