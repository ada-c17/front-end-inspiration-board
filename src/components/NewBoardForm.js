import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const NewBoardForm = (props) => {
    const [title, setTitle] = useState("");
    const [owner, setOwner] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if(!title) {
            alert("Please add a title")
            return
        };

        if(!owner) {
            alert("Please add an owner")
            return
        };

        props.onAdd({ title, owner });

        setTitle("");
        setOwner("");
    };

    return (
        <form onSubmit = {onSubmit}>
            <div>
                <h2>Create a new board:</h2>
                <label>Title: </label>
                <input type="text" placeholder="Dad Jokes"
                value={title} onChange={(e) => setTitle(e.target.value)}></input><br></br>
                <label>Owner: </label>
                <input type="owner" placeholder="Dad"
                value={owner} onChange={(e) => setOwner(e.target.value)}></input>
            </div>
            <input type="submit" value="add board" className="btn"></input>
        </form>
    );
};

NewBoardForm.propTypes = {
    onAdd: PropTypes.func
};

export default NewBoardForm;
