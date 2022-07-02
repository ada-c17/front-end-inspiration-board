/* eslint-disable no-template-curly-in-string */
import "./App.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Otter from "./data/Otter.jpg";
import BoardList from "./components/BoardList";

function App() {
  const [boards, setBoards] = useState([]);

  const [showBoardList, setShowResults] = useState(false);
  const onClickShowBoardlist = () => setShowResults(!showBoardList);

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get("https://inspiration-from-otterspace.herokuapp.com/boards")
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log("Oh no!!!");
      });
  };
  const deleteBoard = (boardID) => {
    axios
      .delete(
        `https://inspiration-from-otterspace.herokuapp.com/boards/${boardID}`
      )
      .then((response) => {
        console.log("Deleted board");
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log("couldn't delete board");
      });
  };

  return (
    <div className="App">
      <img
        src={Otter}
        alt={"otterspace"}
        // cache={"false"}
        className="Otter"
      ></img>
      <h1>Inspiration from the OtterSpace</h1>

      <input
        type="submit"
        value="Show/Hide the List of Spaces"
        onClick={onClickShowBoardlist}
      />
      {showBoardList ? (
        <BoardList boards={boards} deleteBoard={deleteBoard} />
      ) : null}

      <Link to="/new">Add New Space</Link>
      <footer>
        &copy; 2022 Ada Developers Academy ✨ by Coders from the OtterSpace ✨
        Doina ✨ Fena ✨ Marlyn ✨ Nina ✨
      </footer>
    </div>
  );
}

export default App;
