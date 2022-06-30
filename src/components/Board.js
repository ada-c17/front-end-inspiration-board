import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Board() {
  let params = useParams();
  const boardID = params.id;
  console.log(params);

  const [boardsData, setBoardData] = useState([]);

  useEffect(() => {
    getBoardDatafromAPI();
  }, []);

  const getBoardDatafromAPI = () => {
    axios
      .get(
        `https://inspiration-from-otterspace.herokuapp.com/boards/${boardID}/cards`
      )
      .then((response) => {
        console.log(response);
        setBoardData([]);
      })
      .catch((error) => {
        console.log("couldn't call api");
        console.log(error);
      });
  };

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

  return (
    <div className="card">
      <Link to="/" className="HomeLink">
        Return Home
      </Link>
      <ul className="list">
        {/* {boardsData.cards.map((item) => (
          <li key={item.id} className="list-item">
            <div>{item.message}</div>
            <br></br>
            <button to={item.id}>{item.likes_count} add likes +</button>
          </li>
        ))} */}
      </ul>

      {/* <h1>{boardsData.message}</h1> */}
      <h3>id of the board for the reference: {params.id}</h3>
    </div>
  );
}

export default Board;
