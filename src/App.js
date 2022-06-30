import "./App.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // const [data] = useState([
  //   {
  //     id: "1",
  //     title: "Ada is great",
  //     owner: "Nina",
  //   },
  //   {
  //     id: "2",
  //     title: "Life is easy",
  //     owner: "N",
  //   },
  // ]);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get("http://127.0.0.1:5000/boards")
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => {
        console.log("Oh no!!!");
      });
  };

  return (
    <div className="App">
      <h1>Inspiration from the OtterSpace</h1>
      <ul className="list">
        {boards.map((item) => (
          <li key={item.id} className="list-item">
            <Link to="${item.id}">{item.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/new">Add new Board</Link>
      <footer>
        &copy; 2022 Ada Developers Academy ✨ by Coders from the OtterSpace ✨
        Doina ✨ Fena ✨ Marlyn ✨ Nina ✨
      </footer>
    </div>
  );
}

export default App;
