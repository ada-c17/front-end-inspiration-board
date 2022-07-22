import { useState, useEffect, useRef } from "react";
import axios from "axios";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BoardDropdown from "./components/BoardDropdown";
import NewBoardForm from "./components/NewBoardForm";
import MainContent from "./components/MainContent";
import "./App.css";

const kBaseUrl = "https://well-seasoned-app.herokuapp.com";

// Callback function that makes API call to get all boards from database
const getBoards = () => {
  return axios
    .get(`${kBaseUrl}/boards`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Callback function that makes API call to get specific board from database
const getOneBoard = (boardId) => {
  return axios
    .get(`${kBaseUrl}/boards/${boardId}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Callback function that makes API call to update card in database
const patchCard = (messageData) => {
  const patchRequest = {
    card_id: messageData.cardId,
    board_id: messageData.boardId,
    message: messageData.message,
    likes_count: messageData.likesCount,
  };
  return axios
    .patch(`${kBaseUrl}/cards/${messageData.cardId}`, patchRequest)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Callback function that makes API call to create new board
const createNewBoardCallback = (boardData) => {
  return axios
    .post(`${kBaseUrl}/boards`, boardData)
    .then((response) => {
      return response.data.board;
    })
    .catch((err) => {
      console.log(err);
    });
};

// callback function that makes API call to create new card form
const createNewCardCallback = (cardData, boardID) => {
  return axios
    .post(`${kBaseUrl}/boards/${boardID}/cards`, cardData)
    .then((response) => {
      return response.data.board;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Initial chosen board state
const blankBoard = {
  board_id: 0,
  owner: "",
  title: "",
  cards: [],
};

function App() {
  const [boardData, setBoardData] = useState([]);
  const [chosenBoard, setChosenBoard] = useState(blankBoard);
  const ref = useRef(null);

  useEffect(() => {
    updateBoards();
  }, []);

  const setTheme = (board) => {
    if (board.board_id !== 0) {
      const themeHeader = ref.current;
      const themeBody = document.getElementsByTagName("body")[0];

      switch (board.title) {
        case "Summer":
          themeHeader.setAttribute("id", "summer-header");
          themeBody.setAttribute("id", "summer-body");
          break;
        case "Spring":
          themeHeader.setAttribute("id", "spring-header");
          themeBody.setAttribute("id", "spring-body");
          break;
        case "Fall":
          themeHeader.setAttribute("id", "fall-header");
          themeBody.setAttribute("id", "fall-body");
          break;
        case "Winter":
          themeHeader.setAttribute("id", "winter-header");
          themeBody.setAttribute("id", "winter-body");
          break;
        default:
          themeHeader.setAttribute("id", "default-header");
          themeBody.setAttribute("id", "default-body");
      }
    }
  };

  const updateBoards = () => {
    return getBoards().then((boards) => {
      setBoardData(boards);
      defaultBoardByDate(boards);
    });
  };

  const chooseBoard = (boardInfo) => {
    setChosenBoard(boardInfo);
  };

  const deleteCard = (cardId) => {
    axios
      .delete(`${kBaseUrl}/cards/${cardId}`)
      .then(() => {
        getOneBoard(chosenBoard.board_id).then((boardResponse) => {
          chooseBoard(boardResponse.board);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBoard = (boardId) => {
    axios
      .delete(`${kBaseUrl}/boards/${boardId}`)
      .then(() => {
        updateBoards();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const increaseLikes = (messageData) => {
    patchCard(messageData).then((patchResponse) => {
      getOneBoard(patchResponse.card.board_id).then((boardResponse) => {
        chooseBoard(boardResponse.board);
      });
    });
  };

  const filterBoardsBySeason = (boards, season) => {
    for (let board of boards) {
      if (board.title === season) {
        return board;
      }
    }
    return blankBoard;
  };

  const defaultBoardByDate = (boards) => {
    const date = new Date();
    const month = date.getMonth();
    let displayBoard;
    switch (month) {
      case 11:
      case 0:
      case 1:
        displayBoard = filterBoardsBySeason(boards, "Winter");
        chooseBoard(displayBoard);
        break;
      case 2:
      case 3:
      case 4:
        displayBoard = filterBoardsBySeason(boards, "Spring");
        chooseBoard(displayBoard);
        break;
      case 5:
      case 6:
      case 7:
        displayBoard = filterBoardsBySeason(boards, "Summer");
        chooseBoard(displayBoard);
        break;
      case 8:
      case 9:
      case 10:
        displayBoard = filterBoardsBySeason(boards, "Fall");
        chooseBoard(displayBoard);
        break;
      default:
        chooseBoard(blankBoard);
    }
  };

  const createNewBoard = (newBoardData) => {
    return createNewBoardCallback(newBoardData)
      .then((newBoard) => {
        const newData = [...boardData, newBoard];
        setBoardData(newData);
        return newBoard;
      })
      .then((returnBoard) => {
        chooseBoard(returnBoard);
      });
  };

  const handleBoardDataReady = (formData) => {
    return createNewBoard(formData);
  };

  const createCard = (cardData, boardID) => {
    return createNewCardCallback(cardData, boardID)
      .then((boardWithNewCard) => {
        setBoardData((oldData) => {
          return oldData.map((board) => {
            if (board.board_id === boardID) {
              return boardWithNewCard;
            } else {
              return board;
            }
          });
        });
        chooseBoard(boardWithNewCard);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardDataReady = (cardData, boardID) => {
    return createCard(cardData, boardID);
  };

  setTheme(chosenBoard);

  return (
    <BrowserRouter>
      <header id="default-header" ref={ref}>
        <Link to="/">
          <h1>Well-Seasoned</h1>
        </Link>
        <BoardDropdown
          boardData={boardData}
          chooseBoard={chooseBoard}
          chosenBoard={chosenBoard}
        />
        <Link id="add-new-board" to="/new-board">
          Add New Board
        </Link>
      </header>
      <main id="default-body">
        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                id="MainContent"
                chosenBoardData={chosenBoard}
                increaseLikes={increaseLikes}
                deleteCardApp={deleteCard}
                onHandleCardDataReady={handleCardDataReady}
                deleteBoardApp={deleteBoard}
              />
            }
          ></Route>
          <Route
            path="/new-board"
            element={<NewBoardForm onBoardDataReady={handleBoardDataReady} />}
          ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
