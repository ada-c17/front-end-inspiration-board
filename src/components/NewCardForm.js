import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const NewCardForm = (props) => {
    const [message, setMessage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if(!message) {
            alert("Please add a message")
            return
        };

        props.onAdd({ message });

        setMessage("");
    };

    return (
        <form onSubmit = {onSubmit}>
            <div>
                <h1>Create a new card:</h1>
                <label>Message: </label>
                <input type="text" placeholder="I'm afraid for the calendar. Its days are numbered."
                value={message} onChange={(e) => setMessage(e.target.value)}></input>
            </div>
            <input type="submit" value="add card" className="btn"></input>
        </form>
    );
};

NewCardForm.propTypes = {
    onAdd: PropTypes.func
};

export default NewCardForm;
