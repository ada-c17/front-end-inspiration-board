import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
