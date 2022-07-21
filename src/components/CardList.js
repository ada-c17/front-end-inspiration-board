import PropTypes from "prop-types";
import { React, useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import NewCardForm from "./NewCardForm";

const CardList = ({ boardId }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getCards(boardId);
  }, [boardId]);

  const getCards = (boardId) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`)
      .then((response) => {
        const getCardSet = response.data.cards.map((card) => {
          const { cardId, message, boardId, likesCount } = card;
          return { cardId, message, boardId, likesCount };
        });
        setCardData(getCardSet);
      });
  };

  // DELETE axios call
  const onDeleteCard = (cardId) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}`)
      .then(() => {
        getCards(boardId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // PUT axios call
  const onLikeCard = ({ message, newLikesCount, boardId, cardId }) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/cards/${cardId}/like`, {
        message,
        likesCount: newLikesCount,
        boardId,
        cardId,
      })
      .then(() => {
        getCards(boardId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onAddcard = ({ message, likesCount, boardId }) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`, {
        message,
        likesCount,
        boardId,
      })
      .then(() => {
        getCards(boardId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cardListArray = cardData.map((card) => {
    return (
      <div>
        <Card
          message={card.message}
          cardId={card.cardId}
          key={card.cardId}
          likesCount={card.likesCount}
          boardId={card.boardId}
          onDeleteCallback={onDeleteCard}
          onLikeCallback={onLikeCard}
        />
      </div>
    );
  });

  return (
    <section>
      <NewCardForm addCardCallback={onAddcard} boardId={boardId} />
      <h2>Cards List</h2>
      <ul>{cardListArray}</ul>
    </section>
  );
};

CardList.propTypes = {
  boardId: PropTypes.number.isRequired
};

export default CardList;
