import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import Error from "./components/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

const URL = "https://back-end-inspiration-board.herokuapp.com/boards";

const App = () => {
  const [allBoards, setAllBoards] = useState([]);
  const [boardData, setBoardData] = useState([]);

  //Get all boards data
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        // console.log(`response body: ${response.data}`);
        const newBoards = response.data.map((board) => {
          return {
            boardId: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setAllBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Gets one board. Called dynamically when Board is rendered.
  const getOneBoard = (id) => {
    axios
      .get(`${URL}/${id}`)
      .then((response) => {
        const newBoard = {
          boardId: response.data.id,
          title: response.data.title,
          owner: response.data.owner,
          cards: response.data.cards,
        };
        setBoardData(newBoard);
        console.log("in axios: ", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRequest = (id) => {
    return axios
      .delete(`${URL}/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);

        throw new Error(`error deleting board ${id}`);
      });
  };

  const deleteBoard = (id) => {
    return deleteRequest(id)
      .then(() => {
        setAllBoards((oldBoards) => {
          return oldBoards.filter((board) => board.boardId !== id);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // console.log(boardData);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <BoardList boardData={allBoards} deleteBoard={deleteBoard} />
          }
        />
        <Route
          path="/boards/:boardId"
          element={
            <Board
              boardData={boardData}
              getOneBoard={getOneBoard}
              likeHeart={faHeart}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
