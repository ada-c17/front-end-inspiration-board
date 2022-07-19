import "./App.css";
// import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./components/Modal";
import CardForm from "./components/CardForm";

function App() {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const URL = "https://inspiration-board-eota.herokuapp.com/boards";
  const cardsURL = "https://inspiration-board-eota.herokuapp.com/cards";

  const fetchBoards = () => {
    axios
      .get(URL)
      .then((res) => {
        const newBoards = res.data.map((board) => {
          return {
            board_id: board.id,
            title: board.title,
            owner: board.owner,
          };
        });
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchBoards, []);

  const fetchCards = (id) => {
    axios
      .get(`${URL}/${id}/cards`)
      .then((res) => {
        const newCards = res.data.cards.map((card) => {
          return {
            card_id: card.id,
            message: card.message,
            likes_count: card.likes_count,
          };
        });
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchCards, []);

  const addBoard = (boardInfo) => {
    axios
      .post(URL, boardInfo)
      .then((response) => {
        console.log(response);
        fetchBoards();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBoard = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newBoards = [];
        for (const board of boards) {
          if (board.board_id !== id) {
            newBoards.push(board);
          }
        }
        setBoards(newBoards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addCard = (cardInfo) => {
    axios
      .post(cardsURL, cardInfo)
      .then((response) => {
        console.log(response);
        fetchCards();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div className="App-wrapper">
        <header className="App-header">Inspiration Board</header>
        {openModal && <Modal addBoard={addBoard} closeModal={setOpenModal} />}
        <main className="Main">
          <div className="Boards">
            <BoardList
              boards={boards}
              deleteBoard={deleteBoard}
              fetchCards={fetchCards}
              addCard={addCard}
            />
            <section className="Board-form">
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                + CREATE BOARD
              </button>
              {/* <BoardForm addBoard={addBoard} /> */}
            </section>
          </div>
          <div className="Card-display">
            <CardForm addCard={addCard}></CardForm>
            <CardList cards={cards}></CardList>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
