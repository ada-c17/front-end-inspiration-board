import React, { useEffect, useState } from "react";
import "./Board.css";
import PropTypes from "prop-types";
import Card from "./Card.js";
import axios from "axios";
import NewCardForm from "./NewCardForm";

const Board = ({ board_id }) => {
  useEffect(() => {
    getBoardData(board_id);
  }, []);

  const [owner, setOwner] = useState("Default Owner");
  const [title, setTitle] = useState("Default Title");

  const getBoardData = (board_id) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}`)
      .then((response) => {
        console.log(response.data);
        setTitle(response.data.title);
        setOwner(response.data.owner);
      })
      .catch((error) => console.log("Didnt get board data", error));
  };

  const deleteBoard = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}`)
      .then(() => {
        console.log("deleted board");
        // setBoardCallBack(null)
      })
      .catch((error) => console.log(`Cannot delete board ${error}`));
  };


  return (
    <div className="Board">
      <h1>{title}</h1>
      <h2>{owner}</h2>
      {/* <CardList

      /> */}
      <button onClick={() => deleteBoard(board_id)}>DELETE THIS BOARD</button>
      <button onClick={() => console.log("setBaordCallBack(null)")}> 🔙</button>
    </div>
  );
};

export default Board;

Board.propTypes = {
  board_id: PropTypes.string.isRequired,
};
