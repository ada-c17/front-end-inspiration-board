import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList'
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';

const backEndUrl = process.env.REACT_APP_BACKEND_URL;

function App() {

  const [showAddBoard, setShowAddBoard] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState("");

  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getBoards();
  }, []);

  const addBoard = (newBoardData) => {
    axios.post(`${backEndUrl}/boards`, newBoardData)
    .then((res) => {
      const newBoard = {
        board_id: res.data.board.board_id,
        title: res.data.board.title,
        owner: res.data.board.owner
      };
      setBoards((otherBoards) => {
        return [...otherBoards, newBoard];
      });
    })
    .catch((err) => {
      console.log(err)
    });
  };

  const getBoards = () => {
    axios.get(`${backEndUrl}/boards`)
    .then(res => {
      setBoards(res.data)
    }).catch((err) => {
      console.log(err)
    });
  };

  const selectBoard = (id, title, owner) => {
    const chosenBoard = { id: id, title: title, owner: owner };
    setSelectedBoard(chosenBoard);

    axios.get(`${backEndUrl}/boards/${id}/cards`)
    .then(res => {
      setCards(res.data.cards)
    }).catch((err) => {
      console.log(err)
    });
  };

  const addCard = (newCardData) => {
    axios.post(`${backEndUrl}/boards/${selectedBoard.id}/cards`, newCardData)
    .then((res) => {
      const newCard = {
        id: res.data.cards.id,
        message: res.data.cards.message,
        likes_count: res.data.cards.likes_count,
        board_id: res.data.cards.board_id
      };
      setCards((otherCards) => {
        return [...otherCards, newCard];
      });
    }).catch((err) => {
      console.log(err)
    });
  };

  const deleteCard = (cardId) => {
    axios.delete(`${backEndUrl}/cards/${cardId}`)
    .then(() => {
    setCards(cards.filter((card) => card.id !== cardId));
    }).catch((err) => {
      console.log(err)
    });
  };

  const likeCard = (cardId) => {
    axios.patch(`${backEndUrl}/cards/${cardId}/like`)
    .then((res) => {
      for (const card of [...cards]) {
        if (card.id === cardId) {
          card.likes_count ++
        };
      };
      setCards([...cards]);
    }).catch((err) => {
      console.log(err)
    });
  };

  return (
    <div>
      <header>
      </header>
      <main>
        <section>
          <h1>Anything and Everything All of the Time</h1>
          <h2>What is an inspiration board?</h2>
          <p><a href="https://www.dictionary.com/browse/inspiration-board">
              Dictionary.com</a> defines an inspiration board as <span className="italics">'a collage of
              various items, as photographs, drawings, words, fabric swatches, paint chips, and textures,
              used to visualize specifics in the design of a project or event.'</span>
          </p>
          <p>But on this site, you can create boards to collect your favorite quotes,
            to send positive notes, to share jokes, or whatever you want. Have a look around,
            the world is your oyster <span className="italics">(as long as the message is 40
            characters or less)</span>.</p>
        </section>
        <section>
          <BoardList boards={boards} onAddBoard={() =>
          setShowAddBoard(!showAddBoard)} showAdd={showAddBoard} onToggle={selectBoard}></BoardList>
          {showAddBoard && <NewBoardForm onAdd={addBoard}></NewBoardForm>}
          <CardList cards={cards} onDeleteCard={deleteCard} onLikeCard={likeCard}
          onAddCard={() => setShowAddCard(!showAddCard)} showAdd={showAddCard}>
          </CardList>
         {showAddCard && <NewCardForm onAdd={addCard}></NewCardForm>}
        </section>
      </main>
    </div>
  );
};

export default App;
