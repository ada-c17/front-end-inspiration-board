import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardList from "./CardList";

// const board_example = {
//   id: "1",
//   title: "Ada is great",
//   owner: "Nina",
//   cards: [
//     {
//       id: "1",
//       message: "card one with some message ",
//       likes_count: "2",
//     },
//     {
//       id: "2",
//       message: "card two and another message",
//       likes_count: "3",
//     },
//   ],
// };

function Board() {
  let params = useParams();

  const [boardsData, setBoardData] = useState([]);
  const getBoardDatafromAPI = (id) => {
    axios
      .get(
        `https://inspiration-from-otterspace.herokuapp.com/boards/${id}/cards`
      )
      .then((response) => {
        console.log("made it into response");
        // console.log(response);
        // console.log(response.data.cards);
        const updatedBoardData = response.data.cards.map((board) => {
          // console.log(board);
          return {
            id: board.id,
            message: board.message,
            likes_count: board.likes_count,
          };
        });
        // console.log(updatedBoardData);
        setBoardData(updatedBoardData);
      })
      .catch((error) => {
        console.log("couldn't call api");
        console.log(error);
      });
  };

  useEffect(() => {
    getBoardDatafromAPI(params.id);
  }, []);

  // const [board_example] = useState({
  //   id: "1",
  //   title: "Ada is great",
  //   owner: "Nina",
  //   cards: [
  //     {
  //       id: "1",
  //       message: "card one with some message ",
  //       likes_count: "2",
  //     },
  //     {
  //       id: "2",
  //       message: "card two and another message",
  //       likes_count: "3",
  //     },
  //   ],
  // });

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
        {boardsData.map((item) => (
          <li key={item.id} className="list-item">
            {/* also add the setLikesCountCallback in CardList */}

            <CardList data={item} deleteCardCallBack={deleteCard} />
            <button to={item.id}>{item.likes_count} add likes +</button>
          </li>
        ))}
      </ul>

      <h1>{boardsData.message}</h1>
      <h3>id of the board for the reference: {params.id}</h3>
    </div>
  );
}

export default Board;
