import { React } from "react";
import "./board.css";
import NewCardForm from "../components/NewCardForm";
import CardList from "../components/CardList";
import PropTypes from "prop-types";

export default function BoardDisplay({ selectedBoard }) {
  //useEffect-> takes props.boardId, axios call for boardId's cards

  console.log(selectedBoard);
  return (
    <main style={{ padding: "1rem 0" }}>
      <h3 className="board-header">{selectedBoard.title}</h3>
      <section>
        <div>
          <CardList
            cards={selectedBoard.cards}
            boardId={selectedBoard.boardId}
          />
        </div>
        <NewCardForm />
      </section>
    </main>
  );
}

BoardDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  boardId: PropTypes.number.isRequired,
  cards: PropTypes.array,
};
