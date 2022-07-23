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
        }
        else if (message.length > 40) {
            alert("Please enter a message that is 40 characters or less")
        };

        props.onAdd({ message });

        setMessage("");
    };

    return (
        <form onSubmit = {onSubmit}>
            <div>
                <h2>Create a new card:</h2>
                <label>Message: </label>
                <input type="text" placeholder="Where do fruits go on vacation? Pear-is!"
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
