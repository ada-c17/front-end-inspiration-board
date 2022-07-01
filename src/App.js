import React, { useState, useEffect } from "react";
import "./App.css";
import Wall from "./components/Wall";
// import NewBoardForm from './components/NewBoardForm';
import axios from "axios";

function App() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log("ERROR");
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Inspotters</p>
      </header>
      <main>
        <Wall boardData={boards} />
        {/* <NewBoardForm handleSubmission={makeNewBoard} /> */}
      </main>
      <footer>
        ©2022 C17 Otters students: Jodi D., Elaine S., Tori S., Andrea G.Z.
      </footer>
    </div>
  );
}

export default App;
