import Card from './Card.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NewCardForm from './NewCardForm.js';

const CardList = (props) => {

    const [cardsData, setCardsData] = useState([]);

    const URL = 'https://insp-board-migrationmess.herokuapp.com/boards';

    const fetchCards = () => {
        axios
          .get(`${URL}/${props.board.board_id}/cards`)
          .then((response) => {
            const newCards = response.data["cards"].map((card) => {
              return {
                key: card.card_id,
                board_id: card.board_id,
                card_id: card.card_id,
                message: card.message,
                likes_count: 0
              };
            });
            setCardsData(newCards);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    useEffect(fetchCards, [props.board.board_id]);

    // Add likes to specific card
    const increaseLikes = (card_id) => {
      axios
        .patch(`${URL}/${props.board.board_id}/cards/${card_id}/likes`)
        .then(() => {
          const newCards = [];

          for (const card of cardsData) {
            const likedCard = { ...card };

            if (likedCard.card_id === card_id) {
              likedCard.likes_count += 1;
            }
            newCards.push(likedCard);
          }
          setCardsData(newCards);
          })
        .catch((err) => {
          console.log(err);
        });
    };

    // Delete specific card
    const deleteCard = (card_id) => {
      axios
        .delete(`${URL}/${props.board.board_id}/cards/${card_id}`)
        .then(() => {
          const newCards = [];

          for (const card of cardsData) {
            if (card.card_id !== card_id) {
              newCards.push(card);
            }
          }
          setCardsData(newCards);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // Display each card with a Like button and a Delete button
    const cardElements = cardsData.map((card) => {
      return (
        <Card key={card.card_id} card={card} onLikeCallback={increaseLikes} onDeleteCallback={deleteCard}></Card>
      );
    });

    // Function to add a new card to the selected board
    const createNewCard = (CardInfo) => {
        axios
          .post(`${URL}/${props.board.board_id}/cards`, {"board_id":  props.board.board_id,
          "message": CardInfo})
          .then((response) => {
            if (CardInfo.message)
            console.log(response);
            fetchCards();
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <section className="cards__container">
            {/* Display cards for specific Board */}
            <h2>Cards for {props.board.title}</h2>
            <div className="card-items__container">
                {cardElements}
            </div>
            {/* Form to Create a New Card */}
            <NewCardForm createNewCard={createNewCard}></NewCardForm>
        </section>
    );
};

export default CardList;
