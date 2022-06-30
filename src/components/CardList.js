import Card from './Card.js';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState} from 'react';
import NewCardForm from './NewCardForm.js';

const CardList = (props) => {
    const [cardsData, setCardsData] = useState([]);

    const URL = 'https://localhost:5000/boards'

    useEffect(() => {
        axios.get(`${URL}/${props.board.board_id}/cards`)
        .then((res) => {
          setCardsData(res.data);
          });
      }, [props.board]);

    const createNewCard = (message) => {
        axios
        .post(`${URL}/${props.board.board_id}/cards`, message)
        .then((res) => {
          console.log('response', res.data.card);
          const cards = [...cardsData];
          cards.push(res.data.card);
          setCardsData(cards);
        }).catch((error) => {
          console.log('Error:', error);
        });
      }

    const cardComponents = props.cards.map(card => {
        return (
            <li>
                <Card 
                    key={card.card_id}
                    card_id={card.card_id}
                    message={card.messageData} 
                    likes={card.likesData}>
                </Card>
            </li>
        )
    });

    return (
        <section>
            <h2>Card List!</h2>
            <ul>
                {cardComponents}
            </ul>
            <NewCardForm createNewCard={createNewCard}></NewCardForm>
        </section>
    );
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired
};

export default CardList;
