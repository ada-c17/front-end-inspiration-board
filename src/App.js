import "./App.css";
import { Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";
import BoardList from "./components/Board.js";
import Board from "./components/Board.js";
import React, { useState } from "react";

import NewBoardForm from "./components/NewBoardForm.js";
function App() {
  const [data] = useState([
    {
      id: "1",
      title: "Ada is great",
      owner: "Nina",
    },
    {
      id: "2",
      title: "Life easy",
      owner: "N",
    },
  ]);
  return (
    <div className="App">
      <h1>Inspiration from the OtterSpace</h1>
      <ul className="list">
        {data.map((item) => (
          <li key={item.id} className="list-item">
            <Link to={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
      <footer>
        &copy; 2022 Ada Developers Academy ✨ by Coders from the OtterSpace ✨
        Doina ✨ Fena ✨ Marlyn ✨ Nina ✨
      </footer>
    </div>
  );

  // <div className="App">
  //   <main>
  //     <h1>Inspiration from the OtterSpace</h1>
  //     <Router className="App">
  //       <Route exact path="/" component={BoardList} />
  //       <Route path="/:id" component={Board} />
  //     </Router>

  //     {/* <Link to="/new">
  //       <NewBoardForm />
  //     </Link> */}
  //   </main>
  //   {/* <Outlet /> */}

  //   <footer>
  //     &copy; 2022 Ada Developers Academy ✨ by Coders from the OtterSpace ✨
  //     Doina ✨ Fena ✨ Marlyn ✨ Nina ✨
  //   </footer>
  // </div>
}

export default App;
