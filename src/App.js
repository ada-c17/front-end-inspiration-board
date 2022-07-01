import "./App.css";
import { React } from "react";
import { Link, Outlet } from "react-router-dom";

//if called to endpoint boards
// const dummyData = [
//   {
//     boardId: 1,
//     title: "Let's go Whoodles!",
//     cards: [{ cardId: 1, message: "I love dogs!", likesCount: 1 }],
//   },
//   {
//     boardId: 2,
//     title: "Let's go Sheepydoodles!",
//     cards: [
//       { cardId: 1, message: "I love pups!", likesCount: 1 },
//       { cardId: 1, message: "I love pups!", likesCount: 1 },
//     ],
//   },
// ];

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="App-title">Inspiration Board</h1>
        <nav className="routes">
          <Link to="/create" className="choose-board">
            {" "}
            Create an Inspiration Board
          </Link>
          <Link to="/"> Home </Link>
          <Link to="/boards" className="choose-board">
            <section>Inspiration board</section>
            <select>
              <option>Choose an inspiration board</option>
              <option> board 1</option>
              <option> board 2</option>
            </select>
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
