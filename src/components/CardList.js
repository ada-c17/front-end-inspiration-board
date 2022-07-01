import Card from './Card.js';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState} from 'react';
import NewCardForm from './NewCardForm.js';

const CardList = (props) => {
    const [cardsData, setCardsData] = useState([]);

    const URL = 'https://insp-board-migrationmess.herokuapp.com/boards';

    const fetchCards = () => {
        axios
          .get(`${URL}/${props.board.board_id}/cards`)
          .then((res) => {
            const newCards = res.data.map((card) => {
              return {
                key: card.card_id,
                card_id: card.card_id,
                message: card.message,

              };
            });
            setCardsData(newCards);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    useEffect(fetchCards, [props.board]);

    const cardElements = cardsData.map((card) => {
        return (
            <Card
            card={card} ></Card>)
      });

    const createNewCard = (messages) => {
        axios
          .post(`${URL}/${props.board.board_id}/cards`, {"board_id":  props.board.board_id,
          "message": messages})
          .then((response) => {
            if (messages.message)
            console.log(response);
            fetchCards();
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <section>
        <section>
            <h2>Cards for {props.board.title}</h2>
            <div>
               {cardElements}
            </div>
        </section>
        <NewCardForm createNewCard={createNewCard}></NewCardForm>
        </section>
    );
};

export default CardList;
