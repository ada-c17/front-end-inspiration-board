import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";
import BoardDropdown from "./components/BoardDropdown";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import "./css/inspo_board.css";
import AddBoard from "./components/AddBoard";

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
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(false);

  const showChosenBoard = (boardTitle) => {
    setBoardOption(boardTitle);
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
        const boards = [...boards];
        boards.push(response.data.board);
        setBoards(boards);
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
          <button onClick={toggleNewBoardForm}>Add Board</button>
        </section>
        <section className="collapse">
          {isBoardFormVisible ? (
            <NewBoardForm createNewBoard={createNewBoard}></NewBoardForm>
          ) : (
            ""
          )}
        </section>
        {showBoardForm && <AddBoard />}
        <section className="board-content">
          <Board
            cardLike={increaseLike}
            boardTitle={boardOption}
            board={chosenBoardData}
          />
        </section>
      </section>
      <NewCardForm updateCards={addNewCard} />
    </main>
  );
}

export default App;
