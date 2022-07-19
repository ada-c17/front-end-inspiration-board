import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import './CardList.css';

const CardList = (props) => {
  //brains
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios
      .get(``)
      .then((response) => {
        setCardData(response.data);
      })
      .catch((error) => {
        console.log('Error in getting cards', error.response.data);
      });
  }, [props.board]);

  const deleteCard = (card) => {
    axios
      .delete(``)
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

  const addOneCard = (card) => {
    axios
      .put(``)
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

  const cardElements = props.cardData.map((card) => {
    return (
      <Card card={card} addOneCard={addOneCard} deleteCard={deleteCard}></Card>
    );
  });

  const postNewCard = (message) => {
    axios
      .post(``, { message })
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
      <div>{/* <h2>{props.board.title}</h2> */}</div>
      <div>
        <NewCardForm postNewCard={postNewCard}></NewCardForm>
      </div>
      <div>
        <section className="Card">{cardElements}</section>
      </div>
    </>
  );
};

export default CardList;
