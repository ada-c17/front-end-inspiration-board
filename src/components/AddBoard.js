import React from "react";

function AddBoard(props) {
  return (
    <section className="collapse">
      <input className="board-input" type="text" placeholder="Title" />
      <input className="board-input" type="text" placeholder="Owner" />
      <button className="board-button">Add</button>
    </section>
  );
}

export default AddBoard;
