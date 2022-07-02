import Card from './Card.js';
// import PropTypes from 'prop-types';
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
            console.log(response.data);
            console.log(props.board.board_id);

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

    const cardElements = cardsData.map((card) => {
      return (
        <Card key={card.card_id} card={card} onDeleteCallback={deleteCard}></Card>
      );
      // return (
      //   <Card
      //     key={card.card_id}
      //     id={card.card_id}
      //     card_id={card.card_id}
      //     board_id={card.board_id}
      //     message={card.message}
      //     likes_count={card.likes_count}
      //   />
      // );
    });

    return (
        <section>
            <h2>Cards for {props.board.title}</h2>
            <ul>
                {/* {cardComponents} */}
                {cardElements}
            </ul>
            {/* <NewCardForm createNewCard={createNewCard}></NewCardForm> */}
        </section>
    );
};

// CardList.propTypes = {
//     cards: PropTypes.array.isRequired
// };

export default CardList;
