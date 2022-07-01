import React from "react";
import { useState } from "react";
import "./Board.js";
import PropTypes from "prop-types";

//change CSS

const NewBoardForm = ({ addBoardCallback }) => {
    const [boardData, setBoardData] = useState({
    title: "",
    owner: "",
    });

    const submitBoardData = (e) => {
    e.preventDefault();

    addBoardCallback(boardData);
    setBoardData({ title: "", owner: "" });
    };

    const handleChange = (e) => {
    setBoardData({ ...boardData, [e.target.name]: e.target.value });
    };

    return (
    <form onSubmit={submitBoardData} className="new-board__form">
        <section>
        <h2>Add a Board</h2>
        <div className="new-board__fields">
            <label htmlFor="name">Title</label>
            <input
            name="title"
            id="title"
            value={boardData.title}
            onChange={handleChange}
            />
            <label htmlFor="name">Owner</label>
            <input
            name="owner"
            id="owner"
            value={boardData.owner}
            onChange={handleChange}
            />
            <button className="button new-board__submit" type="submit">
            Add Board
            </button>
        </div>
        </section>
    </form>
    );
    };

    NewBoardForm.propTypes = {
    addBoardCallback: PropTypes.func.isRequired,
    };

export default NewBoardForm;
