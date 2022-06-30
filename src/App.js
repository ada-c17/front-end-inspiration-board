import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Board from "./components/Board";
import BoardDropdown from "./components/BoardDropdown";

const kBaseUrl = "https://mission-inspirational-2.herokuapp.com";

const cardApiToJson = (card) => {
  const { id, likes, message, board_id: boardId } = card;
  return { id, likes, message, boardId };
};

const increaseLike = async (id) => {
  // needs to receive the ID of the card that was liked with button click
  try {
    const response = await axios.patch(`${kBaseUrl}/cards/${id}/like`);
    return cardApiToJson(response.data);
  } catch (error) {
    console.log(error);
    throw new Error(`Error when liking card ${id}`);
  }
};

function App() {
  // Functions and variables for the dropdown functionality
  const [boards, setBoards] = useState([]); // list of all the board dicts
  const [boardOption, setBoardOption] = useState("Choose a Board");

  const showChosenBoard = (boardTitle) => {
    setBoardOption(boardTitle);
  };

  const getBoardOptions = () => {
    axios
      .get(`${kBaseUrl}/boards`)
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Unable to get board options");
      });
  };

  useEffect(() => {
    getBoardOptions();
  }, []);

  // Just a way to double check the state has updated; can delete later
  useEffect(() => {
    console.log(boardOption);
  }, [boardOption]);

  // End functions for dropdown functionality

  return (
    <div className="App">
      <header>
        <BoardDropdown
          boards={boards}
          boardOption={boardOption}
          onDropdownChange={showChosenBoard}
        />
      </header>
      <main>
        <Board cardLike={increaseLike} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
