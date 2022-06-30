import React, { useEffect, useState } from "react";
import "./Board.css";
import PropTypes from "prop-types";
import Card from "./Card.js";
import axios from "axios";

const Board = ({ board_id }) => {
  useEffect(() => {
    getBoardData(board_id);
  }, []);
  const [owner, setOwner] = useState("Default Owner");
  const [title, setTitle] = useState("Default Title");
  const getBoardData = (board_id) => {
    axios
      .get(`http://localhost:5000/boards/${board_id}`)
      .then((response) => {
        console.log(response.data);
        setTitle(response.data.title);
        setOwner(response.data.owner);
      })
      .catch((error) => console.log("Didnt get board data", error));
  };

  return (
    <div className="Board">
      <h1>{title}</h1>
      <h2>{owner}</h2>
    </div>
  );
};

export default Board;
