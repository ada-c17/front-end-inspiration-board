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

  // useEffect(() => {
  //   // getBoardDatafromAPI(params.id);
  //   axios
  //     .get(
  //       `https://inspiration-from-otterspace.herokuapp.com/boards/${params.id}/cards`
  //     )
  //     .then((response) => {
  //       setBoardData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("couldn't call api");
  //       console.log(error);
  //     });
  // }, []);

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
  }, [params.id]);

  const setCardLikesCount = (id) => {
    console.log("inside setCardLikesCount", id);
    const cardLikes = [...boardData.cards];
    let targetCard;
    for (let card of cardLikes) {
      if (card.id === id) {
        targetCard = card;
      }
    }

    axios
      .put(`https://inspiration-from-otterspace.herokuapp.com/cards/${id}/like`)
      .then((response) => {
        console.log("made it into like button");
        targetCard.likesCount += 1;
        setBoardData(cardLikes);
        setBoardData(targetCard);
      })
      .catch((error) => {
        console.log("couldn't add like'");
      });
  };

  const deleteCard = (id) => {
    console.log("delete", id);
    axios
      .delete(`https://inspiration-from-otterspace.herokuapp.com/cards/${id}`)
      .then((response) => {
        const newCards = boardData.cards.filter((card) => card.id !== id);
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
      <CardList
        data={boardData.cards}
        deleteCardCallBack={deleteCard}
        setLikesCountCallBack={setCardLikesCount}
      />
      <div>board title : {boardData.title}</div>
      <div>board owner : {boardData.owner}</div>
      <CardForm handleSubmission={makeNewCard} />

      <h3>id of the board for the reference: {params.id}</h3>
    </div>
  );
};

export default Board;
