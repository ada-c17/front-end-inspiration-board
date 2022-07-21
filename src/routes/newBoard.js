import { React } from "react";
import NewBoardForm from "../components/NewBoardForm";
import PropTypes from "prop-types";
import "./newboard.css";

export default function NewBoard({ addBoardCallback }) {
  return (
    <main className="form">
      <NewBoardForm addBoardCallback={addBoardCallback} />
    </main>
  );
}
NewBoard.propTypes = {
  addBoardCallback: PropTypes.func.isRequired,
};
