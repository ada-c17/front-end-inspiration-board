import Card from "./Card.js";
import axios from "axios";
import { useEffect, useState } from "react";
import NewCardForm from "./NewCardForm.js";

const CardList = (props) => {
  // Initial state for card data
  const [cardsData, setCardsData] = useState([]);

  let sort_by = "asc_id";

  const sortCards = (event) => {
    sort_by = event.target.value;
    fetchCards();
  };
  const URL = "https://insp-board-migrationmess.herokuapp.com/boards";
  //const URL = "http://127.0.0.1:5000/boards"

  const fetchCards = () => {
    axios
      .get(`${URL}/${props.board.board_id}/cards`, {
        params: {
          sort: sort_by,
        },
      })
      .then((response) => {
        // Response data is a nested JS object
        const newCards = response.data["cards"].map((card) => {
          return {
            key: card.card_id,
            board_id: card.board_id,
            card_id: card.card_id,
            message: card.message,
            likes_count: card.likes_count,
          };
        });
        setCardsData(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchCards, [props.board.board_id, sort_by]);

  // Add likes to specific card, updating card's like count
  const increaseLikes = (card_id) => {
    axios
      .patch(`${URL}/${props.board.board_id}/cards/${card_id}/likes`)
      .then(() => {
        const newCards = [];

        for (const card of cardsData) {
          // Creating a shallow copy of card and updating it's likes count
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
      <Card
        key={card.card_id}
        card={card}
        onLikeCallback={increaseLikes}
        onDeleteCallback={deleteCard}
      ></Card>
    );
  });

  // Function to add a new card to the selected board
  const createNewCard = (CardInfo) => {
    axios
      .post(`${URL}/${props.board.board_id}/cards`, {
        board_id: props.board.board_id,
        message: CardInfo,
      })
      .then((response) => {
        if (CardInfo.message) console.log(response);
        fetchCards();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="cards__container">
      {/* Display cards for specific Board */}
      {/* <div className="cards_dropdown_container"> */}
      <h2>Cards for {props.board.title} 
        <div>
          <label className="dropdown__arrows"> Sort by </label>
          <select onChange={sortCards}>
            <option value="asc_id">Id</option>
            <option value="asc_alpha">Message</option>
            <option value="asc_likes">Likes</option>
          </select>
        </div>
      </h2>
      <div className="card-items__container">{cardElements}</div>
      {/* Form to Create a New Card */}
      <NewCardForm createNewCard={createNewCard}></NewCardForm>
    </section>
  );
};

export default CardList;
