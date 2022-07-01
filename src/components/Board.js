import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardList from "./CardList";

const Board = (props) => {
  let params = useParams();

  const [boardData, setBoardData] = useState({
    cards: [],
    id: 0,
    owner: "",
    title: "",
  });

  useEffect(() => {
    // getBoardDatafromAPI(params.id);
    axios
      .get(
        `https://inspiration-from-otterspace.herokuapp.com/boards/${params.id}/cards`
      )
      .then((response) => {
        setBoardData(response.data);
      })
      .catch((error) => {
        console.log("couldn't call api");
        console.log(error);
      });
  }, []);

  // const getBoardDatafromAPI = (id) => {
  //   axios
  //     .get(
  //       `https://inspiration-from-otterspace.herokuapp.com/boards/${id}/cards`
  //     )
  //     .then((response) => {
  //       setBoardData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("couldn't call api");
  //       console.log(error);
  //     });
  // };

  const deleteCard = (id) => {
    console.log("delete", id);

    axios
      .delete(`https://inspiration-from-otterspace.herokuapp.com/cards/${id}`)
      .then((response) => {
        const newCards = boardData.cards.filter((card) => card.id !== id);
        // !!!!!
        setBoardData(newCards);
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
      {/* also add the setLikesCountCallback in CardList */}
      <CardList data={boardData.cards} deleteCardCallBack={deleteCard} />
      {/* <button to={item.id}>{item.likes_count} add likes +</button> */}
      <div>board title : {boardData.title}</div>
      <div>board owner : {boardData.owner}</div>
      <h3>id of the board for the reference: {params.id}</h3>
    </div>
  );
};

export default Board;
