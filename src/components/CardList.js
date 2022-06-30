import Card from './Card.js';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState} from 'react';
// import NewCardForm from './NewCardForm.js';

const CardList = (props) => {
    const [cardsData, setCardsData] = useState([]);

    const URL = 'https://localhost:5000/boards'

    const fetchCards = () => {
        axios
          .get(`${URL}/${props.board.board_id}/cards`)
          .then((res) => {
            const newCards = res.data.map((card) => {
              return {
                card_id: card.card_id,
                title: card.title,
                owner: card.owner
              };
            });
            setCardsData(newCards);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    useEffect(fetchCards, []);


    const createNewCard = (message) => {
        axios
          .post(`${URL}/${props.board.board_id}/cards`, message)
          .then((response) => {
            if (message.title && message.owner) {
              console.log(response);
              fetchCards();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };

    // const cardComponents = props.cards.map(card => {
    //     return (
    //         <li>
    //             <Card 
    //                 key={card.card_id}
    //                 card_id={card.card_id}
    //                 message={card.messageData} 
    //                 likes={card.likesData}>
    //             </Card>
    //         </li>
    //     )
    // });

    return (
        <section>
            <h2>Cards for {props.board.title}</h2>
            <ul>
                {/* {cardComponents} */}
            </ul>
            {/* <NewCardForm createNewCard={createNewCard}></NewCardForm> */}
        </section>
    );
};

// CardList.propTypes = {
//     cards: PropTypes.array.isRequired
// };

export default CardList;
