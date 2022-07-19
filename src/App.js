import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NewBoardForm from "./components/NewBoardForm";
import BoardsList from "./components/BoardsList";
import HideForm from "./components/HideForm";
import NewCardForm from "./components/NewCardForm";
import CardsList from "./components/CardsList";

function App() {
  const selectedBoardData = {
    id: null,
    title: "",
    owner: "",
  };

  // keeping stracking on board state
  const [boards, setBoards] = useState([]);
  // keeping tracking on showing or hiding form state
  const [displayForm, setDisplayForm] = useState(true);
  // keeping tracking on selected board state
  const [boardSelected, setBoardSelected] = useState(selectedBoardData);
  const [cardsData, setCardsData] = useState([]);
  const URL = "https://get-inspired-c17.herokuapp.com/boards";

  // get all boards from DB
  const fetchBoards = () => {
    axios
      .get(URL)
      .then((response) => {
        const responseBoard = [...response.data];
        const newBoards = responseBoard.map((board) => {
          return {
            id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoards(newBoards);
      })
      .catch((error) => {
        alert("Oop! Could not access the boards!");
      });
  };

  // rendering and showing data once
  useEffect(fetchBoards, []);

  // adding board
  const addBoard = (boardInfo) => {
    axios
      .post(URL, boardInfo)
      .then((res) => {
        if (boardInfo.title && boardInfo.owner) {
          fetchBoards();
        } else {
          alert("Oop! Missing title or owner!");
        }
      })
      .catch((err) => {
        alert("Oop! Could not add the board!");
      });
  };

  // function to show or hide the form by click
  const flipDisplayForm = () => {
    setDisplayForm(!displayForm);
  };

  // showing selected board
  const selectedBoard = (id) => {
    const newBoards = [...boards];
    for (const board of newBoards) {
      if (board.id === id) {
        setBoardSelected(board);
        fetchCards(id);
      }
    }
  };

  // sort card by id
  const sort_card = (card_a, card_b) => {
    if (card_a.id < card_b.id) {
      return -1;
    } else {
      return 1;
    }
  };

  // get all cards
  const fetchCards = (id) => {
    axios
      .get(`${URL}/${id}/cards`)
      .then((response) => {
        const cardsCopy = [...response.data];
        const newCards = cardsCopy.map((card) => {
          return {
            id: card.card_id,
            message: card.message,
            likes_count: card.likes_count,
            board_id: id,
          };
        });
        setCardsData(newCards.sort(sort_card));
      })
      .catch((error) => {
        console.log(error);
        alert("Oop! Could not access the cards!");
      });
  };

  //useEffect(fetchCards, [boardSelected]);
  // creating a new card by specific board
  const postNewCard = (cardInfo) => {
    axios
      .post(`${URL}/${boardSelected.id}/cards`, cardInfo)
      .then((response) => {
        fetchCards(boardSelected.id);
      })
      .catch((error) => {
        alert("Couldn't create a new card.");
      });
  };

  // deleting a card by id
  const deleteCard = (card_id) => {
    axios
      .delete(`https://get-inspired-c17.herokuapp.com/cards/${card_id}`)
      .then((response) => {
        const newCardItems = [...cardsData];
        const newCardsList = [];
        for (const card of newCardItems) {
          if (card.card_id !== card_id) {
            newCardsList.push(card);
          }
        }
        setCardsData(newCardsList);
        fetchCards(boardSelected.id);
      });
  };

  //count like
  const likeCard = (newCard) => {
    const cards = [...cardsData];
    for (let card of cards) {
      if (card.id === newCard.id) {
        card.likes_count += 1;
        axios
          .put(
            `https://get-inspired-c17.herokuapp.com/cards/${card.id}/like`,
            card
          )
          .then((res) => {
            fetchCards(boardSelected.id);
          })
          .catch((err) => {
            alert("Oop! Could not +1 the card");
          });
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <div>
        <section className="box-container">
          <div className="board">
            <h2>Boards</h2>
            <ol className="boards-list">
              <BoardsList
                boardsList={boards}
                selectedBoardCallBack={selectedBoard}
              />
            </ol>
          </div>
          <div className="selected-board">
            <h2>Selected Boards</h2>
            <div>
              {boardSelected.id
                ? `${boardSelected.title} - ${boardSelected.owner}`
                : "Select a Board from the Board List!"}
            </div>
          </div>
          <div className="New-board">
            <h2>Create a New Board</h2>
            {displayForm ? (
              <NewBoardForm
                addBoardCallBack={addBoard}
                flipFormCallBack={flipDisplayForm}
              />
            ) : (
              <HideForm flipFormCallBack={flipDisplayForm} />
            )}
          </div>
          <div>
            {boardSelected.id && (
              <CardsList
                cards={cardsData}
                selectedBoard={boardSelected}
                deleteCardCallback={deleteCard}
                likeCardCallback={likeCard}
              />
            )}
          </div>
          <div>
            {boardSelected.id && <NewCardForm postNewCard={postNewCard} />}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

// console.log(response.data);
//         const newCardsData = cardsData.map((existingCard) => {
//           console.log(existingCard);
//           return existingCard.card_id !== newCard.card_id
//             ? existingCard
//             : { ...newCard, likes_count: newCard.likes_count + 1 };