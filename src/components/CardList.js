import PropTypes from "prop-types";
import { React, useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
// import NewCardForm from "./NewCardForm";

//props is an array of objects of card instances for a particular board
//cardList gets rendered in a specific page
// const CardList = ({ boardId }) => {
//   //useEffect() -> when pages loads (boardId), makes an API call to boards/<boardId>/cards-> endpoint
//   console.log(cards);
//   const [cardData, setCardData] = useState([]);
//   //const [isVisible, setVisibility] = useState(true);

//   useEffect(() => {
//     const getCard = () => {
//       axios
//         .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`)
//         .then((response) => {
//           const getCardSet = response.data.map((card) => {
//             const { cardId, message } = card;
//             return { cardId, message };
//           });
//           setCardData(getCardSet);
//         });
//     };
//   }, []);


  // const onDelete = (id) => {
  //   axios
  //     .delete(`${URL}/${id}`)
  //     .then(() => {
  //       getCard();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const addCard = (cardData) => {
  //   axios.post(URL, cardData).then((response) => {
  //     getCard();
  //   });
  // };

  // setCardData(cardData)
  //   const totalLikes = cardData.reduce((total, entry) => {
  //     return total + entry.liked;
  // }, 0);
  // console.log(boardId);
  const cardListArray = cards.map((card) => {
    return (
      <div>
        <Card
          message={card.message}
          cardId={card.cardId}
          key={card.cardId}
          liked={card.likesCount}
          boardId={card.boardId}
        />
      </div>
    );
  });

  return (
    <section>
      <NewCardForm />
      <h2>Cards List</h2>
      <ul>{cardListArray}</ul>
    </section>
  );
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardList;
