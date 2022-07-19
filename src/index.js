import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Board from "./components/Board.js";

import NewBoardForm from "./components/NewBoardForm.js";

// added reactrouter library to work with routes down below
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* Able to work with the paths below based on endpoint */}
    <Routes>
      <Route path="new" element={<NewBoardForm />} />
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<Board />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
