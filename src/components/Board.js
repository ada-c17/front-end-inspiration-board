import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardList from "./components/CardList";
import Card from "./components/Card";

function Board() {
  let params = useParams();

  const [board_example] = useState({
    id: "1",
    title: "Ada is great",
    owner: "Nina",
    cards: [
      {
        id: "1",
        message: "card one with some message ",
        likes_count: "2",
      },
      {
        id: "2",
        message: "card two and another message",
        likes_count: "3",
      },
    ],
  });

  const [cards, setCards] = useState([]);

  const deleteCard = (id) => {
    console.log("delete", id);

    axios
      .delete(`http://127.0.0.1:5000/cards/${id}`)
      .then((response) => {
        const newCards = cards.filter((card) => card.id !== id);
        setCards(newCards);
      })
      .catch((error) => {
        console.log("Unable to delete");
      });
  };

  return (
    <div className="card">
      <Link to="/" className="HomeLink">
        Return Home
      </Link>
      <ul className="list">
        {board_example.cards.map((item) => (
          <li key={item.id} className="list-item">
            <div>{item.message}</div>
            <br></br>
            {/* also add the setLikesCountCallback in CardList */}

            <CardList cardData={cards} deleteCardCallBack={deleteCard} />
            <button to={item.id}>{item.likes_count} add likes +</button>
          </li>
        ))}
      </ul>

      <h1>{board_example.message}</h1>
      <h3>id of the board for the reference: {params.id}</h3>
    </div>
  );
}

export default Board;
