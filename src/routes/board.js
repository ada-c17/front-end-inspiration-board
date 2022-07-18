import { React } from "react";
import "./board.css";
import NewCardForm from "../components/NewCardForm";
import Board from "../components/Board";

export default function BoardDisplay({ selectedBoard }) {
  //useEffect-> takes props.boardId, axios call for boardId's cards
  return (
    <main style={{ padding: "1rem 0" }}>
      <h3 className="board-header">{selectedBoard.title}</h3>
      <section>
        {/* <Board selectedBoard={selectedBoard} /> */}
        {/* <CardList></CardList> */}
        <NewCardForm />
      </section>
    </main>
  );
}
