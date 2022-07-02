import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import CardList from "./CardList";
import CardForm from "./CardForm";

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
      .get(
        `https://inspiration-from-otterspace.herokuapp.com/boards/${id}/cards`
      )
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
      .put(`https://inspiration-from-otterspace.herokuapp.com/cards/${id}/like`)
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
    axios
      .delete(`https://inspiration-from-otterspace.herokuapp.com/cards/${id}`)
      .then((response) => {
        const newCards = boardData.cards.filter((card) => card.id !== id);
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
      .post(
        `https://inspiration-from-otterspace.herokuapp.com/boards/${params.id}/cards`,
        data
      )
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
