/* eslint-disable no-template-curly-in-string */
import "./App.css";
import useSound from "use-sound";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Otter from "./data/Otter.jpg";
import BoardList from "./components/BoardList";
import laugh from "./data/Laugh.mp3";
import Story from "./components/Story";

function App() {
  const [showBoardList, setShowResults] = useState(false);
  // to play sound
  const [play] = useSound(laugh);

  const onClickShowBoardlist = () => setShowResults(!showBoardList);

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

      {showBoardList ? <BoardList /> : <Story />}

      <Link to="/new">
        <div id="add-new-space">Add New Space</div>
      </Link>
      <footer>
        &copy; 2022 Ada Developers Academy ✨ by Coders from the OtterSpace ✨
        Doina ✨ Fena ✨ Marlyn ✨ Nina ✨
      </footer>
    </div>
  );
}

export default App;
