import { React } from "react";
import "./board.css";
import "../components/NewCardForm";
import NewCardForm from "../components/NewCardForm";

export default function Board() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h3 className="board-header">Name of Board</h3>
      <section>
        <NewCardForm />
      </section>
    </main>
  );
}
