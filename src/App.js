/* eslint-disable no-template-curly-in-string */
import "./App.css";
import useSound from "use-sound";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Otter from "./data/Otter.jpg";
import BoardList from "./components/BoardList";
import laugh from "./data/Laugh.mp3";
import Story from "./components/Story";

function App() {
  const [boards, setBoards] = useState([]);
  const [showBoardList, setShowResults] = useState(false);

  const [play] = useSound(laugh);

  const onClickShowBoardlist = () => setShowResults(!showBoardList);

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get("/boards")
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log("Oh no!!!");
      });
  };

  const deleteBoard = (boardID) => {
    const board_name = boards.find((x) => x.id === boardID).title;
    const confirm = window.confirm(
      `Are you sure you wish to delete the Space ${board_name}?`
    );
    if (confirm) {
      axios
        .delete(`/boards/${boardID}`)
        .then((response) => {
          console.log("Deleted board");
          getBoardsFromAPI();
        })
        .catch((error) => {
          console.log("couldn't delete board");
        });
    }
  };

  const editBoard = (boardID, new_title) => {
    axios
      .put(`/boards/${boardID}`, { title: new_title })
      .then((response) => {
        console.log("Updated board");
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
        onClick={play}
      ></img>
      <h1>Inspiration from the OtterSpace</h1>

      <input
        type="submit"
        value="Story / Spaces"
        onClick={onClickShowBoardlist}
      />
      {showBoardList ? (
        <BoardList
          boards={boards}
          deleteBoard={deleteBoard}
          editBoard={editBoard}
        />
      ) : (
        <Story />
      )}

      <Link to="/new">Add New Space</Link>
      <footer>
        &copy; 2022 Ada Developers Academy ✨ by Coders from the OtterSpace ✨
        Doina ✨ Fena ✨ Marlyn ✨ Nina ✨
      </footer>
    </div>
  );
}

export default App;
