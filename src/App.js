import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList'
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';

const backEndUrl = process.env.REACT_APP_BACKEND_URL;

function App() {

  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState("");
  const [cards, setCards] = useState([]);
  const [showAddBoard, setShowAddBoard] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);

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

  const sortCards = (category) => {
    if (category === "id") {
      setCards([...cards.sort(function(a,b){return a.id - b.id})]);
    } else if (category === "abc") {
      setCards([...cards.sort(function(a,b){return a.message > b.message ? 1: -1})]);
    } else if (category === "likes") {
      setCards([...cards.sort(function(a,b){return b.likes_count - a.likes_count})]);
    };
  };

  return (
    <div>
      <main>
        <section>
          <h1>Welcome to the Inspiration Board!</h1>
          <p>Have a look around. Anything that brain of yours can think of can be added.
            You can create boards to collect your favorite quotes, to send positive notes,
            to share jokes, or whatever you want. This site is your oyster <span className="italics">
              (as long as the message is 40 characters or less)</span>.</p>
        </section>
        <section>
          <BoardList boards={boards} onAddBoard={() =>
          setShowAddBoard(!showAddBoard)} showAdd={showAddBoard} onToggle={selectBoard}></BoardList>
          { showAddBoard && <NewBoardForm onAdd={addBoard}></NewBoardForm> }

          { selectedBoard ? (<h3>Chosen topic: <span className="white">{selectedBoard.title}</span></h3>): "" }
          { selectedBoard ? (
            <section>
              <label>Sort notes by: </label>
                <select onChange={ ((e) => sortCards(e.target.value)) }>
                  <option value="id">id</option>
                  <option value="abc">alphabetically</option>
                  <option value="likes">likes</option>
                </select>
            </section>
          ): "" }
          { selectedBoard ? (<CardList cards={cards} onDeleteCard={deleteCard} onLikeCard={likeCard}
          onAddCard={() => setShowAddCard(!showAddCard)} showAdd={showAddCard}></CardList>): "" }

          { showAddCard && <NewCardForm onAdd={addCard}></NewCardForm> }
        </section>
      </main>
      <footer>
        <p>© Anacapamu 2022</p>
        <li className="italics">credit to <a href="https://www.youtube.com/watch?v=k1BneeJTDcU">Bo Burnham</a> for
        inspiration of website verbiage</li>
        <li className="italics">credit to <a href="https://unsplash.com/photos/Ow-joAY8NyY">Alfred Aloushy</a> for background
        image</li></footer>
    </div>
  );
};

export default App;
