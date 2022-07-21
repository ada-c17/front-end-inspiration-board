import { React } from "react";
import "./ChosenBoard.css";
import CardList from "../components/CardList";
import PropTypes from "prop-types";

export default function BoardDisplay({ selectedBoard }) {

  return (
    <main>
      <h3 className="board-header">{selectedBoard.title}</h3>
      <section>
        <div>
          <CardList boardId={selectedBoard.boardId} />
        </div>
      </section>
    </main>
  );
}

BoardDisplay.propTypes = {
  selectedBoard: PropTypes.array.isRequired
};
