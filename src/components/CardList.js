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
            // console.log("get request");
            // console.log(response.data);
            // console.log(props.board.board_id);
            const newCards = response.data["cards"].map((card) => {
              return {
                key: card.card_id,
                board_id: card.board_id,
                card_id: card.card_id,
                message: card.message,
                likes_count: card.likes_count
              };
            });

            setCardsData(newCards);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    useEffect(fetchCards, [props.board.board_id]);

    // This function is not working yet
    // const addCard = (cardsData) => {
    //   axios
    //     .post(`${URL}/${props.board.board_id}/cards/`)
    //     .then((response) => {
    //       fetchCards();
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

  // const [cardData, setCardData] = useState([])

  // // const [likes_count, setLikeCount] = useState(0);

    const increaseLikes = (card_id) => {
        // console.log(`Inside increaseLikes!`);
      axios
        .patch(`${URL}/${props.board.board_id}/cards/${card_id}/likes`)
        .then(() => {
          console.log('inside the increase likes function!');
          card_id.likes_count = card_id.likes_count + 1;
          }
          // setLikeCount(likes_count + 1);
          // setCardsData(card_id)
        );
    };

    // useEffect(increaseLikes, [props.board.board_id.card_id]);

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

    // Display each card with Delete button
    const cardElements = cardsData.map((card) => {
      return (
        <Card key={card.card_id} card={card} onLikeCallback={increaseLikes} onDeleteCallback={deleteCard}></Card>
      );
    });


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
            {/* Form to Create a New Card */}
            {/* <NewCardForm addCardCallback={addCard}></NewCardForm> */}

            {/* Display cards for specific Board */}
            <h2>Cards for {props.board.title}</h2>
            <div className="card-items__container">
                {cardElements}
            </div>
            <NewCardForm createNewCard={createNewCard}></NewCardForm>
        </section>
    );
};

export default CardList;
