import React, { useEffect, useState } from "react";
import "./Board.css";
import PropTypes from "prop-types";
import Card from "./Card.js";
import axios from "axios";

const Board = (id) => {
  const [board, setBoard] = useState(0);

  const getBoardData = (id) => {
    axios
      .get("http://localhost:5000/boards/1")
      .then((response) => {
        setBoard(response.data);
      })
      .catch((error) => console.log("Didnt get board data", error));
  };

  return <ul className="Board">{getBoardData(1)}</ul>;
};

export default Board;
