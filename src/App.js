import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";
import BoardDropdown from "./components/BoardDropdown";
import "./css/inspo_board.css";

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
  const [chosenBoardData, setChosenBoardData] = useState([]);

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
  useEffect(
    (boards) => {
      for (const board of boards) {
        if (board.title === boardOption) {
          setChosenBoardData(board);
        }
      }
    },
    [boardOption]
  );

  // End functions for dropdown functionality

  return (
    <main>
      <section className="container">
        <section className="logo-area">
          <p className="logo">INSPOBOARD</p>
        </section>
        <section className="dropdown-menu">
          <BoardDropdown
            boards={boards}
            boardOption={boardOption}
            onDropdownChange={showChosenBoard}
          />
        </section>
        <section className="add-menu-button">
          <button>Add Board</button>
        </section>
        <section className="collapse">
          <input className="board-input" type="text" placeholder="Title" />
          <input className="board-input" type="text" placeholder="Owner" />
          <button className="board-button">Add</button>
        </section>
        <section className="board-content">
          <Board
            cardLike={increaseLike}
            boardTitle={boardOption}
            board={chosenBoardData}
          />
          {/* <section className="card-display">
            <div className="message">
              <p className="message-text">You can do it!</p>
              <p className="likes">Likes: 0</p>
              <button className="like-button">👍</button>
            </div> */}
        </section>
      </section>
      <section className="add-message">
        <input
          className="message-input"
          type="text"
          placeholder="Add a message here!"
        />
        <button className="message-button">Add</button>
      </section>
    </main>
  );
}

export default App;
