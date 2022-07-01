import React from "react";
import axios from "axios";
import Board from "../src/components/Board";
import "./css/inspo_board.css";

const kBaseUrl = "https://mission-inspirational-2.herokuapp.com";

const cardApiToJson = (card) => {
  const { id, likes, message, board_id: boardId } = card;
  return { id, likes, message, boardId };
};

const increaseLike = async (id) => {
  // needs to receive the ID of the card that was liked with button click
  try {
    const response = await axios.patch(`${kBaseUrl}/cards/${id}/like`);
    return cardApiToJson(response.data);
  } catch (error) {
    console.log(error);
    throw new Error(`Error when liking card ${id}`);
  }
};

function App() {
  return (
    <main>
      <section className="container">
        <section className="logo-area">
          <p className="logo">INSPOBOARD</p>
        </section>
        <section className="dropdown-menu">
          {/* THE BELOW IS A PLACEHOLDER FOR A DROPDOWN MENU */}
          <select name="boards" id="boards" class="dropdown">
            <option value="">Select a board</option>
            <option value="tamara">Tamara's Inspo Board</option>
            <option value="georgia">Georgia's Inspo Board</option>
            <option value="natalia">Natalia's Inspo Board</option>
            <option value="shari">Shari's Inspo Board</option>
          </select>
        </section>
        <section className="add-menu-button">
          <button>Add Board</button>
        </section>
        <section className="collapse">
          <input className="board-input" type="text" placeholder="Title" />
          <input className="board-input" type="text" placeholder="Owner" />
          <button className="board-button">Add</button>
        </section>
        <section className="board-content">
          <h1>Current Board:(current board)</h1>
          <Board cardLike={increaseLike} />
          <section className="card-display">
            <div className="message">
              <p className="message-text">You can do it!</p>
              <p className="likes">Likes: 0</p>
              <button className="like-button">👍</button>
            </div>
            <div className="message">
              <p className="message-text">Way to be!</p>
              <p className="likes">Likes: 0</p>
              <button className="like-button">👍</button>
            </div>
            <div className="message">
              <p className="message-text">Amazing work!</p>
              <p className="likes">Likes: 0</p>
              <button className="like-button">👍</button>
            </div>
            <div className="message">
              <p className="message-text">Be all you can be!</p>
              <p className="likes">Likes: 0</p>
              <button className="like-button">👍</button>
            </div>
            <div className="message">
              <p className="message-text">Reach for the stars!</p>
              <p className="likes">Likes: 0</p>
              <button className="like-button">👍</button>
            </div>
          </section>
        </section>
        <section className="add-message">
          <input
            className="message-input"
            type="text"
            placeholder="Add a message here!"
          />
          <button className="message-button">Add</button>
        </section>
      </section>
    </main>
  );
}

export default App;
