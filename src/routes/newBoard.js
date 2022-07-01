import { React } from "react";
import NewBoardForm from "../components/NewBoardForm";
import "./newboard.css";

export default function NewBoard() {
  return (
    <main style={{ padding: "1rem 0" }} className="form">
      <NewBoardForm />
    </main>
  );
}
