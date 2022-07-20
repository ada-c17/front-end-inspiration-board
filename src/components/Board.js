import React, { useEffect, useState } from "react";
import "./Board.css";
import PropTypes from "prop-types";
import axios from "axios";
import NewCardForm from "./NewCardForm";
import CardList from "./CardList";
const Board = ({ board_id, changeBoardCallback }) => {
  useEffect(() => {
    getBoardData(board_id);
  }, []);

  const [owner, setOwner] = useState("Default Owner");
  const [title, setTitle] = useState("Default Title");

  const getBoardData = (board_id) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}`)
      .then((response) => {
        setTitle(response.data.title);
        setOwner(response.data.owner);
      })
      .catch((error) => console.log("Didnt get board data", error));
  };

  const deleteBoard = (board_id) => {
    console.log({ changeBoardCallback });
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}`)
      .then(() => {
        console.log("deleted board");
        changeBoardCallback(0);
      })
      .catch((error) => console.log(`Cannot delete board ${error}`));
    console.log("Board deleted now we are resetting display");
    changeBoardCallback(0);
  };

  const [cardsDisplayedOnBoard, setCardsDisplayedOnBoard] = useState([]);

  useEffect(() => {
    getCardData(board_id);
  }, []);

  const getCardData = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}/cards`)
      .then((response) => {
        setCardsDisplayedOnBoard(response.data.cards);
      })
      .catch((error) => {
        console.log(
          `Cards for this Board Cannot be Displayed Delete Due to: ${error}`
        );
      });
  };

  const makeNewCard = (newCard) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}/cards`, {
        message: newCard,
      })
      .then((response) => {
        console.log(response.data, "here");
        getCardData();
      })
      .catch((error) => {
        console.log(
          `Cards for this Board Cannot be Displayed Delete Due to: ${error}`
        );
      });
  };

  const deleteCard = (card_id) => {
    console.log(`Delete Card: ${card_id}`);
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card_id}`)
      .then((response) => {
        console.log(`Card ${card_id} Deleted`);
        const updatedCards = cardsDisplayedOnBoard.filter(
          (card) => card.id !== card_id
        );
        setCardsDisplayedOnBoard(updatedCards);
      })
      .catch((error) => {
        console.log(`Card Cannot be Deleted Due to: ${error}`);
      });
  };

  const likeCard = (card_id) => {
    console.log("+1 Like!");
    const likedCards = [...cardsDisplayedOnBoard];
    let targetCard;
    for (let card of likedCards) {
      if (card.id === card_id) {
        targetCard = card;
      }
    }

    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/cards/${targetCard.id}/like`,
        { likes_count: targetCard.likes_count + 1 }
      )
      .then((response) => {
        targetCard.likes_count += 1;
        console.log(`Card ${card_id} Liked`);
        setCardsDisplayedOnBoard(likedCards);
      })
      .catch((error) => {
        console.log(`New Card Could Not be Created Due to: ${error}`);
      });
  };

  // const makeNewCard = (board_id, message) => {
  //     console.log(message);
  //     axios
  //     .post(`${process.env.REACT_APP_BACKEND_URL}/${board_id}/cards`, message)
  //     .then((response) => {
  //         console.log("Card Successfully Created");
  //         getCardData();
  //     })
  //     .catch((error) => {
  //         console.log(`New Card Could Not be Created Due to: ${error}`);
  //     });
  // };

  return (
    <>
      <div className="Board">
        <h1>{title}</h1>
        <h2>{owner}</h2>
        {/* <NewCardForm submitFunction={makeNewCard}/> */}
        <CardList
          cardsDisplayedOnBoard={cardsDisplayedOnBoard}
          deleteCardCallback={deleteCard}
          likeCardCallback={likeCard}
        />
        <button onClick={() => deleteBoard(board_id)}>DELETE THIS BOARD</button>
        <button onClick={() => changeBoardCallback(0)}> 🔙</button>
      </div>
      <div>
        <NewCardForm handleSubmission={makeNewCard} />
      </div>
    </>
  );
};

export default Board;

Board.propTypes = {
  changeBoardCallback: PropTypes.func.isRequired,
};
