import "./App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [data] = useState([
    {
      id: "1",
      title: "Ada is great",
      owner: "Nina",
    },
    {
      id: "2",
      title: "Life is easy",
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
      <Link to="/new">New</Link>
      <footer>
        &copy; 2022 Ada Developers Academy ✨ by Coders from the OtterSpace ✨
        Doina ✨ Fena ✨ Marlyn ✨ Nina ✨
      </footer>
    </div>
  );
}

export default App;
