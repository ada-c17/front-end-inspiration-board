import React from "react";
import "./BoardForm.css";

const BoardForm = () => {
  return (
    <div>
      <form className="New-board-form">
        <label htmlFor="title"></label>
        <input type="text" name="title" placeholder="Board Title" />
        <label htmlFor="title"></label>
        <input type="text" name="title" placeholder="Owner's Name" />
        <input type="submit" value="Create Board" />
      </form>
    </div>
  );
};

export default BoardForm;
