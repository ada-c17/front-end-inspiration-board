import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "./components/Sidebar";
import Main from "./components/Main";

const defaultChosenBoard = { board_id: null, title: "Please select a board!" };

const App = () => {
  const [boards, setBoards] = useState([]);
  const [chosenBoard, setChosenBoard] = useState(defaultChosenBoard);

  const handleChosenBoard = (boardId) => {
    axios
      .get(
        `https://valt-backend-inpboard.herokuapp.com/boards/${boardId}/cards`
      )
      .then((response) => {
        const chosenBoard = response.data;
        setChosenBoard(chosenBoard);
      })
      .catch((error) => console.log(`Cannot get the data ${error}`));
  };

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get("https://valt-backend-inpboard.herokuapp.com/boards")
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => console.log(`Cannot get the data ${error}`));
  };

  const makeNewBoard = (data) => {
    axios
      .post("https://valt-backend-inpboard.herokuapp.com/boards", data)
      .then((response) => {
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log(`Unable to add a new board  ${error}`);
      });
  };

  const deleteBoard = (boardId) => {
    axios
      .delete(`https://valt-backend-inpboard.herokuapp.com/boards/${boardId}`)
      .then(() => {
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log(`Unable to delete a card  ${error}`);
      });
  };

  const makeNewCard = (boardId, data) => {
    axios
      .post(
        `https://valt-backend-inpboard.herokuapp.com/boards/${boardId}/cards`,
        data
      )
      .then(() => {
        handleChosenBoard(boardId);
      })
      .catch((error) => {
        console.log(`Unable to add a new card  ${error}`);
      });
  };

  const deleteCard = (boardId, cardId) => {
    axios
      .delete(`https://valt-backend-inpboard.herokuapp.com/cards/${cardId}`)
      .then(() => {
        handleChosenBoard(boardId);
      })
      .catch((error) => {
        console.log(`Unable to delete a card  ${error}`);
      });
  };

  const increaseLikeCountAPICall = (boardId, cardId) => {
    axios
      .patch(`https://valt-backend-inpboard.herokuapp.com/cards/${cardId}/like`)
      .then(() => {
        handleChosenBoard(boardId);
      })
      .catch((error) => {
        console.log(
          `Unable to increase like count of card ${cardId} due to ${error}`
        );
      });
  };

  return (
    <div className="App">
      <main>
        <SideBar
          boards={boards}
          handleChosenBoardCallback={handleChosenBoard}
          newBoardSubmission={makeNewBoard}
          chosenBoardId={chosenBoard.board_id}
          deleteBoard={deleteBoard}
        />
        <Main
          chosenBoard={chosenBoard}
          boardTitle={chosenBoard.title}
          cards={chosenBoard.cards}
          deleteCard={deleteCard}
          addLike={increaseLikeCountAPICall}
          chosenBoardId={chosenBoard.board_id}
          handleSubmission={makeNewCard}
        />
      </main>
    </div>
  );
};

export default App;
