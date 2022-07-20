import PropTypes from "prop-types";
import Card from "./Card";
import CardForm from "./CardForm";
import axios from "axios";
import { useState, useEffect } from "react";

const CARDS_URL = "https://fast-caverns-05936.herokuapp.com/cards";
const BOARDS_URL = "https://fast-caverns-05936.herokuapp.com/boards";

const BoardWithCards = (props) => {
  const [cards, setCards] = useState([]);
  const fetchCardsForBoard = () => {
    axios
      .get(`${BOARDS_URL}/${props.boardID}/cards`)
      .then((res) => {
        const newCards = res.data.cards.map((card) => {
          return {
            card_id: card.card_id,
            board_id: props.boardID,
            message: card.message,
            likes_count: card.likes_count,
          };
        });
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchCardsForBoard, [props.boardID]);

  const addCard = (cardInfo) => {
    axios
      .post(CARDS_URL, cardInfo)
      .then((response) => {
        fetchCardsForBoard(cardInfo.board_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const validateCardmessage = (response) => {
  //   if (response.data.card.message.length < 40) {
  //     //WE WANT RED TEXT BOX HERE
  //     console.log("hi");
  //   }
  // }
  const deleteCard = (id) => {
    axios
      .delete(`${CARDS_URL}/${id}`)
      .then(() => {
        const newCards = [];
        for (const card of cards) {
          if (card.card_id !== id) {
            newCards.push(card);
          }
        }
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeLikes = (id) => {
    axios
      .patch(`${CARDS_URL}/${id}/likes`)
      .then(() => {
        const newCards = [];
        for (const card of cards) {
          const newCard = { ...card };
          if (newCard.card_id === id) {
            newCard.likes_count++;
          }
          newCards.push(newCard);
        }
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cardComponent = cards.map((card) => {
    return (
      <Card
        key={card.card_id}
        id={card.card_id}
        message={card.message}
        board_id={card.board_id}
        likes={card.likes_count}
        changeLikes={changeLikes}
        deleteCard={deleteCard}
      />
    );
  });

  return (
    <div id="boardWithcard">
      <h2> {props.boardTitle}</h2>
      <div>{cardComponent}</div>
      <div class = "redTextBox">
        <CardForm cardsCallback={addCard} boardID={props.boardID} />
      </div>
    </div>
  );
};

BoardWithCards.propTypes = {
  cards: PropTypes.array.isRequired,
  changeLikes: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};
export default BoardWithCards;
