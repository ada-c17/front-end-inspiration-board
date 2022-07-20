import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import Dropdown from "./components/Dropdown";

function App() {
  const URL = "https://gramtaschie.herokuapp.com";

  const defaultBoard = {
    id: 0,
    title: "Select a board to get inspired!",
    owner: "",
  };

  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(defaultBoard);
  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const [sortType, setSortType] = useState("id");

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
      .get(`${URL}/boards/${selectedBoard.id}?sort=${sortType}`)
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

  useEffect(() => fetchBoards(), []);
  const sortingCards = (sortType) => {
    console.log(sortType);
    setSortType(sortType);
    // fetchCards();
  };

  useEffect(() => fetchBoards, []);
  useEffect(() => {
    if (selectedBoard.id === 0) {
      return;
    } else {
      fetchCards();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBoard]);

  useEffect(() => {
    if (selectedBoard.id === 0) {
      return;
    } else {
      fetchCards();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

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
    setSelectedBoard(board);
  };

  const deleteBoard = () => {
    axios
      .delete(`${URL}/boards/${selectedBoard.id}`)
      .then(() => {
        const updatedBoards = [];
        for (const board of boards) {
          if (board.id !== selectedBoard.id) {
            updatedBoards.push(board);
          }
        }
        setBoards(updatedBoards);
        setSelectedBoard(defaultBoard);
        setCards([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createNewCard = (cardForm) => {
    cardForm.board_id = selectedBoard.id;
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

  const deleteCard = (card_id) => {
    axios
      .delete(`${URL}/cards/${card_id}`)
      .then(() => {
        const updatedCards = [];
        for (const card of cards) {
          if (card.card_id !== card_id) {
            updatedCards.push(card);
          }
        }
        setCards(updatedCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleNewBoardForm = () => {
    setIsBoardFormVisible(!isBoardFormVisible);
  };

  const hideBoard = isBoardFormVisible ? "boardform" : "boardform-hidden";

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
      <section className={hideBoard}>
        {isBoardFormVisible ? (
          <NewBoardForm addBoardCallback={createNewBoard}></NewBoardForm>
        ) : (
          ""
        )}
        <button onClick={toggleNewBoardForm} className="boardform-button">
          {isBoardFormVisible ? "Hide Form" : "Show Form"}
        </button>
      </section>

      <section className="cards">
        <h2>{selectedBoard.title}</h2>
        <div>
          {selectedBoard.id !== 0 ? (
            <div className="cardform">
              <NewCardForm addCardCallback={createNewCard}></NewCardForm>
            </div>
          ) : null}
          <Dropdown sortingCardsCallback={sortingCards}> </Dropdown>
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
