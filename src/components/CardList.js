import PropTypes from "prop-types";
import { React, useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import NewCardForm from "./NewCardForm";
// {
//   "boardId": 1,
//   "cardId": 2,
//   "likesCount": 200,
//   "message": "Hulloooo"
// }
// event handler in CardList-> onLiking(updatedCard), makes a PUT axios request (URL, {updatedCard}), then() getCards
//event handler gets passed to Card, just like on Delete
//
//

//props is an array of objects of card instances for a particular board
//cardList gets rendered in a specific page
const CardList = ({ boardId }) => {
  //useEffect() -> when pages loads (boardId), makes an API call to boards/<boardId>/cards-> endpoint
  console.log(boardId);
  const [cardData, setCardData] = useState([]);
  //const [isVisible, setVisibility] = useState(true);

  useEffect(() => {
    getCards(boardId);
  }, [boardId]);

  const getCards = (boardId) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`)
      .then((response) => {
        console.log(response.data);
        const getCardSet = response.data.cards.map((card) => {
          const { cardId, message, boardId, likesCount } = card;
          return { cardId, message, boardId, likesCount };
        });
        setCardData(getCardSet);
      });
  };

  // DELETE axios call
  const onDeleteCard = (cardId) => {
    console.log(cardId);
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
    console.log(message, boardId, cardId);
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

  // const addCard = (cardData) => {
  //   axios.post(URL, cardData).then((response) => {
  //     getCard();
  //   });
  // };

  const onAddcard = ({ message, likesCount, boardId }) => {
    console.log(message, boardId);
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

  // setCardData(cardData)
  //   const totalLikes = cardData.reduce((total, entry) => {
  //     return total + entry.liked;
  // }, 0);
  // console.log(boardId);
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
  cards: PropTypes.array.isRequired,
};

export default CardList;
