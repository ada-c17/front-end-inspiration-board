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
            Choose an inspiration board
          </Link>
        </nav>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
