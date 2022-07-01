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

  // my lines
  // const [cards, setCards] = useState(CARDS);

  // const onLike = (id) => {
  //   const newCards = cards.map((card) => {
  //     if (card.id === id) {
  //       return {
  //         ...card,
  //         likes: (card.likes += 1),
  //       };
  //     }
  //     return card;
  //   });
  //   setCards(newCards);
  // };

  // const onDelete = (id) => {
  //   const newCards = cards.filter((card) => card.id !== id);
  //   setCards(newCards);
  // };

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
        const newBoards = response.data.map((board) => {
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
        setCardsData(newCards);
        console.log(newCards);
      })
      .catch((error) => {
        alert("Oop! Could not access the cards!");
      });
  };

  const postNewCard = (cardInfo) => {
    axios
      .post(`${URL}/${boardSelected.id}/cards`, cardInfo)
      .then((response) => {
        fetchCards();
      })
      .catch((error) => {
        alert("Couldn't create a new card.");
      });
  };

  // const deleteCard = (card_id) => {
  //   console.log(card_id);
  //   axios
  //     .delete(`https://get-inspired-c17.herokuapp.com/cards/${card_id}`)
  //     .then((response) => {
  //       const responseCard = { ...response.data };
  //       const newCardsList = [];
  //       for (const card of responseCard) {
  //         if (card.id !== card_id) {
  //           newCardsList.push(card);
  //         }
  //       }
  //       setCardsData(newCardsList);

  //       // console.log(response)
  //       // const responseCard = {...response.data}
  //       // const newCards = responseCard.filter((card) => card.id !== card_id);
  //       // setCardsData(newCards);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       alert("Couldn't delete a new card.");
  //     });
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <div>
        <section className="box-container">
          <div className="board">
            <h2>Boards</h2>
            <div className="boards-list">
              <BoardsList
                boardsList={boards}
                selectedBoardCallBack={selectedBoard}
              />
            </div>
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
            <h2>Card list</h2>
            <CardsList cards={cardsData}/>
          </div>
          <div>
            <NewCardForm postNewCard={postNewCard}></NewCardForm>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
