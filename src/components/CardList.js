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
            console.log(response);
            console.log(response.data);
            // const card_response = res.data
            // const card_data_response = Array.from(res);
            // const newCards = {Array.isArray(card_response) ? res.data.map((card) => {
            // //   // console.log(res);
            //   return {
            //     board_id: card.board_id,
            //     card_id: card.card_id,
            //     message: card.message,
            //     likes_count: card.likes_count
            //   };
            // }) : null};

            const newCards = response.data["cards"].map((card) => {
              return {
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

    const cardElements = cardsData.map((card) => {
        return (
          <Card card={card}></Card>)
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
        <section>
            <h2>Cards for {props.board.title}</h2>
            <ul>
                {/* {cardComponents} */}
                {cardElements}
            </ul>
            <NewCardForm createNewCard={createNewCard}></NewCardForm>
        </section>
    );
};

export default CardList;
