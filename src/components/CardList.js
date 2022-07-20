import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';
import './CardList.css';

export const baseURL = process.env['REACT_APP_BACKEND_URL'];

const CardList = (props) => {
  //brains
  const [cardData, setCardData] = useState([]);
  // const [selectedBoard, setSelectedBoard] = useState(props.selectedBoard.id);
  useEffect(() => {
    console.log(props.selectedBoard);
    axios
      .get(`${baseURL}/boards/${props.selectedBoard.id}/cards`)
      .then((response) => {
        console.log(response.data);
        setCardData(response.data);
        console.log(cardData);
      })
      .catch((error) => {
        console.log('Error in getting cards', error.response.data);
      });
  }, [props.selectedBoard]);

  const deleteCard = (card) => {
    axios
      .delete(`${baseURL}/cards/${card.id}`)
      .then((response) => {
        const newCardData = cardData.filter((existingCard) => {
          return existingCard.card_id !== card.card_id;
        });
        setCardData(newCardData);
      })
      .catch((error) => {
        console.log('Error in deleteing card', error.response.data);
      });
  };

  const addOneLike = (card) => {
    axios
      .put(`${baseURL}/cards/${card.id}`)
      .then((response) => {
        const newCardData = cardData.map((existingCard) => {
          return existingCard.card_id !== card.card_id
            ? existingCard
            : { ...card, like_count: card.like_count + 1 };
        });
        setCardData(newCardData);
      })
      .catch((error) => {
        console.log('Error in adding a like', error.response.data);
      });
  };

  const cardElements = cardData.map((card) => {
    console.log(cardData);
    return (
      <Card
        message={card.message}
        likes={card.likes}
        addOneLike={addOneLike}
        deleteCard={deleteCard}
      ></Card>
    );
  });

  const postNewCard = (message) => {
    axios
      .post(`${baseURL}/cards`, { message })
      .then((response) => {
        const cards = [...cardData];
        cards.push(response.data.card);
        setCardData(cards);
      })
      .catch((error) => {
        console.log('Error in creating a new card', error.response.data);
      });
  };

  //beauty
  return (
    <>
      <div>
        <section className="card-list">{cardElements}</section>
      </div>
    </>
  );
};

export default CardList;
