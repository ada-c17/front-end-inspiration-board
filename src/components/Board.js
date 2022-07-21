import { Card } from "./Card";
import { CreateCard } from "./CreateCard";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Board.css";

export const Board = ({ id, title, owner }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get(`https://swifties-inspo-board-6.herokuapp.com/boards/${id}`).then((response) => {
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
      .post("https://swifties-inspo-board-6.herokuapp.com/cards", data)
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

  const [category, setCategory] = useState(0);

  let sortedCards;
  if (category === 1) {
    sortedCards = [...cardData].sort((a, b) =>
      a.message > b.message ? 1 : -1
    );
  } else if (category === 2) {
    sortedCards = [...cardData].sort((a, b) => b.likes - a.likes);
  } else {
    sortedCards = [...cardData].sort((a, b) => a.id - b.id);
  }

  const handleCategoryChange = (category) => {
    console.log(category);
    setCategory(category);
  };

  return (
    <div className="board">
      <div className="board-body">
        <h1 className="board-title">{title}</h1>
        <p className="board-subtitle">Owner: {owner}</p>
        <div className="position-absolute">
          <select
            className="btn btn-secondary btn-sm dropdown-toggle"
            name="category"
            onChange={(event) =>
              handleCategoryChange(event.target.selectedIndex)
            }
          >
            <option id="0">Sort by ID</option>
            <option id="1">Sort alphabetically</option>
            <option id="2">Sort by number of likes</option>
          </select>
        </div>

        <div className="new-card">
          <div className="exisitng-card">
            {sortedCards.map((data) => (
              <Card
                key={data.id}
                id={data.id}
                message={data.message}
                likes={data.likes}
                onRemoveCallback={removeCard}
              ></Card>
            ))}
          </div>

          <div className="add-card">
            <CreateCard addCardCallback={addCard}></CreateCard>
          </div>
        </div>
      </div>
    </div>
  );
};
