import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";
import BoardDropdown from "./components/BoardDropdown";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import "./css/inspo_board.css";

const kBaseUrl = "https://mission-inspirational-2.herokuapp.com";
// const kBaseUrl = "http://localhost:5000";

const cardApiToJson = (card) => {
  const { id, likes, message, board_id: boardId } = card;
  return { id, likes, message, boardId };
};

const increaseLike = async (id) => {
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
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(false);

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

  // new helper
  const getBoardListDropdown = () => {
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

  const createNewBoard = (newBoard) => {
    axios
      .post(`${kBaseUrl}/boards`, newBoard)
      .then((response) => {
        const newBoards = [...boards];
        newBoards.push(response.data.board);
        setBoards(newBoards);
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Couldn't create a new board.");
      });
  };

  const toggleNewBoardForm = () => {
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  useEffect(() => {
    // initially loads boards
    getBoardListDropdown();
  }, []);

  const renderChosenBoard = () => {
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
  };

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

  useEffect(() => {
    renderChosenBoard();
  }, [boardOption]);

  // Get updated board data for selected board and set board
  const getSelectedBoardData = (boardId) => {
    axios.get(`${kBaseUrl}/boards/${boardId}`).then((response) => {
      console.log(response);
      setChosenBoardData({
        cards: response.data.cards,
      });
    });
  };

  const addNewCard = (newMessage) => {
    let boardId;
    for (const board of boards) {
      if (board.title === boardOption) {
        boardId = board.id;
      }
    }
    const requestBody = {
      message: newMessage,
      board_id: boardId,
      likes: 0,
    };
    axios
      .post(`${kBaseUrl}/cards`, requestBody)
      .then((response) => {
        console.log("response:", response.data);
        return cardApiToJson(response.data);
      })
      .then(() => getSelectedBoardData(boardId))
      .catch((err) => {
        console.log(err);
        throw new Error("error adding card");
      });
  };

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
          <button onClick={toggleNewBoardForm}>
            {isBoardFormVisible ? "Hide Form" : "Add Board"}
          </button>
        </section>
        {isBoardFormVisible ? (
          <NewBoardForm createNewBoard={createNewBoard}></NewBoardForm>
        ) : (
          ""
        )}
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
      <NewCardForm updateCards={addNewCard} />
    </main>
  );
}

export default App;
