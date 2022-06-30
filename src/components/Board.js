import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardList from "./CardList";

const board_example = {
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
};

function Board() {
  let params = useParams();

  const [cards, setCards] = useState({
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

  const deleteCard = (id) => {
    console.log("delete", id);

    axios
      .delete(`https://inspiration-from-otterspace.herokuapp.com/cards/${id}`)
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
            {/* also add the setLikesCountCallback in CardList */}

            <CardList
              data={board_example.cards}
              deleteCardCallBack={deleteCard}
            />
            {/* <button to={item.id}>{item.likes_count} add likes +</button> */}
          </li>
        ))}
      </ul>

      <h3>id of the board for the reference: {params.id}</h3>
    </div>
  );
}

export default Board;
