import React from "react";
import axios from "axios";
import "./App.css";
import Board from "../src/components/Board";

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
  // Should we store board data here?
  return (
    <div className="App">
      <header></header>
      <main>
        <Board cardLike={increaseLike} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
