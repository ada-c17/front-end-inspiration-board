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
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedBoardName, setSelectedBoardName] = useState(
    "Select a board to get inspired!"
  );
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);

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
      .get(`${URL}/boards/${selectedBoard}`)
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
  useEffect(() => {
    if (selectedBoard === null) {
      return;
    } else {
      fetchCards();
    }
  }, [selectedBoard]);

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

  const selectBoard = (board) => {
    setSelectedBoard(board.id);
    setSelectedBoardName(board.title);
    // fetchCards();
  };

  const deleteBoard = () => {
    axios
      .delete(`${URL}/boards/${selectedBoard}`)
      .then(() => {
        const updatedBoards = [];
        for (const board of boards) {
          if (board.id !== selectedBoard) {
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

  const createNewCard = (cardForm) => {
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

  const likeCard = (card_id) => {
    let newCard = {};
    for (const card of cards) {
      if (card.card_id === card_id) {
        newCard = { ...card };
        newCard.likes_count += 1;
      }
    }
    axios
      .put(`${URL}/cards/${card_id}/like`, newCard)
      .then((response) => {
        fetchCards();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCard = (card_id) => {};

  const toggleNewBoardForm = () => {
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>✨ Gramtaschie Inspiration Board ✨</h1>
      </header>
      <section className="board">
        <Board
          boards={boards}
          fetchBoardsCallback={fetchBoards}
          selectBoardCallback={selectBoard}
          deleteBoardsCallback={deleteBoard}
          fetchCardsCallback={fetchCards}
        ></Board>
      </section>
      <section className="boardform">
        {isBoardFormVisible ? (
          <NewBoardForm addBoardCallback={createNewBoard}></NewBoardForm>
        ) : (
          ""
        )}
        <button onClick={toggleNewBoardForm} className="boardform-button">
          {isBoardFormVisible ? "Hide New Board Form" : "Show New Board Form"}
        </button>
      </section>

      <section className="cards">
        <h2>{selectedBoardName}</h2>
        <div>
          {selectedBoard != null ? (
            <div className="cardform">
              <NewCardForm addCardCallback={createNewCard}></NewCardForm>
            </div>
          ) : null}
        </div>
        <CardList
          cards={cards}
          fetchCardsCallback={fetchCards}
          likeCardCallback={likeCard}
          deleteCardCallback={deleteCard}
        ></CardList>
      </section>

      <footer className="footer">© 2022 gramtaschie</footer>
    </div>
  );
}

export default App;
