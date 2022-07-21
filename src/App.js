import React from 'react';
import { useState } from 'react';
import Button from './components/Button';
import BoardList from './components/BoardList'
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';

function App() {
  const [showAddBoard, setShowAddBoard] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);

  const [boards, setBoards] = useState([
    {"boardId": 1,
    "title": "Song Titles",
    "owner": "NG"},
    {"boardId": 2,
    "title": "Inspiration Quotes",
    "owner": "NG"}
  ])

  const [cards, setCards] = useState([
    {"cardId": 1,
    "message": "Day by Day",
    "boardId": 1},
    {"cardId": 2,
    "message": "Numb Little Bug",
    "boardId": 1},
    {"cardId": 3,
    "message": "Fake it until you make it.",
    "boardId": 2},
    {"cardId": 4,
    "message": "Live every day like it is your last.",
    "boardId": 1}
  ]);

  const addBoard = (board) => {
    setBoards([...boards, board])
  };

  const addCard = (card) => {
    setCards([...cards, card])
  };

  const deleteCard = (cardId) => {
    setCards(cards.filter((card) => card.cardId !== cardId))
  };

  return (
    <div>
      <header>
      </header>
      <main>
        <section id="intro">
          <h1>Inspiration Board</h1>
          <h2>What is an inspiration board?</h2>
          <p><span className="source"><a href="https://www.dictionary.com/browse/inspiration-board">
              Dictionary.com</a></span> defines an inspiration board as 'a collage of various items, as photographs, drawings, words, fabric swatches,
            paint chips, and textures, used to visualize specifics in the design of a
            project or event.'
          </p>
          <p>But on this site, you can create boards to collect your favorite movie quotes,
            to send positive notes to future you, or whatever you want. The world is your oyster.</p>
        </section>
        <section>
          <BoardList boards={boards} onAddBoard={() =>
          setShowAddBoard(!showAddBoard)} showAdd={showAddBoard}></BoardList>
          {showAddBoard && <NewBoardForm onAdd={addBoard}></NewBoardForm>}
          <CardList cards={cards} onDeleteCard={deleteCard}
          onAddCard={() => setShowAddCard(!showAddCard)} showAdd={showAddCard}>
          </CardList>
         {showAddCard && <NewCardForm onAdd={addCard}></NewCardForm>}
        </section>
      </main>
    </div>
  );
};

export default App;
