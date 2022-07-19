import React, { useEffect, useState } from "react";
import "./Board.css";
import PropTypes from "prop-types";
import axios from "axios";
import NewCardForm from "./NewCardForm";
import CardList from "./CardList";

const Board = ({ board_id, changeBoardCallback }) => {
  useEffect(() => {
    getBoardData(board_id);
  }, []);
  const [testCards, setTestCards] = useState([
    {
      card_id: 1,
      message: "Test Card 1 (To Be Deleted)",
      likes_count: 1,
    },
    {
      card_id: 2,
      message: "Test Card 2 (To Be Deleted)",
      likes_count: 0,
    },
    {
      card_id: 3,
      message: "Test Card 3 (To Be Deleted)",
      likes_count: 0,
    },
    {
      card_id: 4,
      message: "Test Card 4 (To Be Deleted)",
      likes_count: 0,
    },
    {
      card_id: 5,
      message: "Test Card 5(To Be Deleted)",
      likes_count: 0,
    },
    {
      card_id: 6,
      message: "Test Card 6 (To Be Deleted)",
      likes_count: 1,
    },
  ]);

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

  const deleteBoard = (board_id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}`)
      .then(() => {
        console.log("deleted board");
        changeBoardCallback(0);
      })
      .catch((error) => console.log(`Cannot delete board ${error}`));
    console.log("Board deleted now we are resetting display");
  };

  return (
    <div className="Board">
      <h1>{title}</h1>
      <h2>{owner}</h2>
      <CardList cardsOnBoard={testCards} />
      <button onClick={() => deleteBoard(board_id)}>DELETE THIS BOARD</button>
      <button onClick={() => changeBoardCallback(0)}> 🔙</button>
    </div>
  );
};

export default Board;

Board.propTypes = {
  changeBoardCallback: PropTypes.func.isRequired,
};
