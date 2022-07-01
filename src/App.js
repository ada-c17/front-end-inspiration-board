import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";

function App() {
  const URL = "https://gramtaschie.herokuapp.com";

  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(8);

  const fetchBoards = () => {
    axios
      .get(`${URL}/boards`)
      .then((response) => {
        console.log("fetchBoard request");
        const updatedBoards = response.data;
        console.log(updatedBoards);
        setBoards(updatedBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCards = () => {
    axios
      .get(`${URL}/cards`)
      .then((response) => {
        console.log("fetchCard request");
        const updatedCards = response.data;
        console.log(updatedCards);
        setCards(updatedCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => fetchBoards, []);
  useEffect(() => fetchCards, []);

  const createNewBoard = (boardForm) => {
    axios
      .post(`${URL}/boards`, boardForm)
      .then((response) => {
        fetchBoards();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createNewCard = (cardForm) => {
    console.log("I will create a new card");
    cardForm.board_id = selectedBoard;
    axios
      .post(`${URL}/cards`, cardForm)
      .then((response) => {
        fetchCards();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBoard = () => {
    const id = selectedBoard;
    axios
      .delete(`${URL}/boards/${id}`)
      .then(() => {
        const updatedBoards = [];
        for (const board of boards) {
          if (board.id !== id) {
            updatedBoards.push(board);
          }
        }
        setBoards(updatedBoards);
        setSelectedBoard(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <header>
        <h1>Inspiration Board</h1>
        <Board
          boards={boards}
          fetchBoardsCallback={fetchBoards}
          deleteBoardsCallback={deleteBoard}
        ></Board>
        <h3>Selected Board is {selectedBoard}</h3>
        <NewBoardForm addBoardCallback={createNewBoard}></NewBoardForm>
        <NewCardForm addCardCallback={createNewCard}></NewCardForm>
        <CardList cards={cards} fetchCardsCallback={fetchCards}></CardList>
      </header>
    </div>
  );
}

export default App;
