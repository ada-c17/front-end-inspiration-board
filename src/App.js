import "./App.css";
import { React } from "react";
import { Link, Outlet } from "react-router-dom";

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
