/* eslint-disable camelcase */
import './CardList.css';
import Card from './Card';
import PropTypes from 'prop-types';

const CardList = (props) => {
    const cardComponents = (props) => {
        return props.cardsOnBoard.map((card) => (
            <Card
                key={card.card_id}
                card_id={card.card_id}
                message={card.message}
                likes_count={card.likes_count}
                deleteCardCallback={props.deleteCardCallback}
                likeCardCallback={props.likeCardCallback}
            />
        ));
    };
    return <ul>{cardComponents(props)}</ul>;
};

CardList.propTypes = {
    cardsOnBoard: PropTypes.arrayOf(
        PropTypes.shape({
            cardId: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likesCount: PropTypes.number.isRequired,
        })
    ).isRequired,
    deleteCardCallback: PropTypes.func,
    likeCardCallback: PropTypes.func,
};

export default CardList;


  // const [cardsDisplayedOnBoard, setCardsDisplayedOnBoard] = useState([]);
  
  // useEffect(() => {
  //     getCardDataForBoard();
  // }, []);

  // const getCardDataForBoard = (board_id) => {
  //     axios
  //         .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}/cards`)
  //         .then((response) => {
  //             setCardsDisplayedOnBoard(response.data);
  //         })
  //         .catch((error) => {
  //             console.log(`Cards for this Board Cannot be Displayed Delete Due to: ${error}`);
  //         });
  // };
  // const deleteCard = (card_id) => {
  //     console.log(`Delete Card: ${card_id}`);
  //     axios
  //         .delete(`process.env.REACT_APP_BACKEND_URL}/cards/${card_id}`)
  //         .then((response) => {
  //             console.log(`Card ${card_id} Deleted`);
  //             const updatedCards = cardsDisplayedOnBoard.filter((card) => card.id !== card.card_id); //Tori to update
  //             setCardsDisplayedOnBoard(updatedCards);
  //         })
  //         .catch((error) => {
  //             console.log(`Card Cannot be Delete Due to: ${error}`);
  //         });
  // };

  // const likeCard = (card_id) => {
  //     console.log("+1 Like!")
  //     const newCards = [...cardsDisplayedOnBoard];
  //     for(let card of newCards) {
  //         if(card.id === card.card_id) { //Tori to update
  //             card.likes_count += 1;
  //         }
  //     }
  //     setCardsDisplayedOnBoard(newCards);

  //     axios
  //     .patch(`${process.env.REACT_APP_BACKEND_URL}/cards/${card_id}/like`)
  //     .then((response) => {
  //         console.log(`Card ${card_id} Liked`);

  //     })
  //     .catch((error) => {
  //         console.log(`New Card Could Not be Created Due to: ${error}`);
  //     });
  // };

  // const makeNewCard = (data) => {
  //     console.log(data);
  //     axios
  //     .post(`${process.env.REACT_APP_BACKEND_URL}/${board_id}/cards`, data)
  //     .then((response) => {
  //         console.log("Card Successfully Created");
  //         getCardDataForBoard();
  //     })
  //     .catch((error) => {
  //         console.log(`New Card Could Not be Created Due to: ${error}`);
  //     });
  // };