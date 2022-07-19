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
  console.log("increase like entered");
  // needs to receive the ID of the card that was liked with button click
  try {
    const response = await axios.patch(`${kBaseUrl}/cards/${id}/like`);
    console.log(response.data);
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
  const [chosenBoardData, setChosenBoardData] = useState({ cards: [] });
  const [cardOrder, setSortOrder] = useState("");
  const [cardSort, setSortType] = useState("");
  const [sortedData, setSortedData] = useState([]);

  console.log(sortedData);

  const showChosenBoard = (boardTitle) => {
    setBoardOption(boardTitle);
  };

  // order is ascending or descending, type is which type of sort
  const updateSortOrder = (order) => {
    setSortOrder(order);
  };

  const updateSortType = (type) => {
    setSortType(type);
  };

  // Probably need to have this run again whenever a card or board is added
  useEffect(() => {
    axios
      .get(`${kBaseUrl}/boards`)
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Unable to get board options");
      });
  }, [boardOption]);

  useEffect(() => {
    if (boards) {
      for (const board of boards) {
        if (board.title === boardOption) {
          console.log(
            `This is the board being chosen: ${JSON.stringify(board)}`
          );
          setChosenBoardData(board);
        }
      }
    }
  }, [boardOption, boards, cardOrder, cardSort]);

  useEffect(() => {
    console.log(chosenBoardData.cards);
    console.log(
      `This is cardOrder: ${cardOrder}. This is cardSort: ${cardSort}`
    );
    if (cardOrder && cardSort) {
      let sortedCardData;
      if (cardOrder === "Ascending") {
        if (cardSort === "ID") {
          sortedCardData = chosenBoardData.cards.sort((a, b) =>
            a.id > b.id ? 1 : -1
          );
        } else if (cardSort === "Likes") {
          sortedCardData = chosenBoardData.cards.sort((a, b) =>
            a.likes > b.likes ? 1 : -1
          );
        } else if (cardSort === "Alphabetically") {
          sortedCardData = chosenBoardData.cards.sort((a, b) =>
            a.message > b.message ? 1 : -1
          );
        }
      } else if (cardOrder === "Descending") {
        if (cardSort === "ID") {
          sortedCardData = chosenBoardData.cards.sort((a, b) =>
            a.id < b.id ? 1 : -1
          );
        } else if (cardSort === "Likes") {
          sortedCardData = chosenBoardData.cards.sort((a, b) =>
            a.likes < b.likes ? 1 : -1
          );
        } else if (cardSort === "Alphabetically") {
          sortedCardData = chosenBoardData.cards.sort((a, b) =>
            a.message < b.message ? 1 : -1
          );
        }
      }
      setSortedData([...sortedCardData]);
    } else {
      setSortedData(chosenBoardData.cards);
    }
  }, [cardOrder, cardSort, boardOption, chosenBoardData]);

  console.log(
    `This is sortedData after sort outside UseEffect: ${JSON.stringify(
      sortedData
    )}`
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
            cardOrder={cardOrder}
            cardSort={cardSort}
            updateSortOrder={updateSortOrder}
            updateSortType={updateSortType}
            sortedData={sortedData}
          />
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
