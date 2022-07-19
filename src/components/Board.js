import { Card } from "./Card";
import { CreateCard } from "./CreateCard";
import axios from "axios";
import { useState, useEffect } from "react";

export const Board = ({ id, title, owner }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/boards/${id}`).then((response) => {
      const cards = response.data.board.cards.map((card) => ({
        id: card.id,
        message: card.message,
        likes: card.likes_count,
      }));
      setCardData(cards);
    });
  }, []);

  const removeCard = (id) => {
    const newCards = cardData.filter((card) => {
      return card.id !== id;
    });

    setCardData(newCards);
  };

  const addCard = (message) => {
    const data = {
      board_id: id,
      message: message,
    };

    axios
      .post("http://127.0.0.1:5000/cards", data)
      .then((response) => {
        console.log(response);
        const card = response.data.card;

        const newCards = [...cardData];
        newCards.push({
          id: card.id,
          message: card.message,
          likes: card.likes_count,
        });
        setCardData(newCards);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-subtitle">{owner}</p>
        <div className="d-flex flex-row">
          {cardData.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              message={data.message}
              likes={data.likes}
              onRemoveCallback={removeCard}
            ></Card>
          ))}
          <CreateCard addCardCallback={addCard}></CreateCard>
        </div>
      </div>
    </div>
  );
};