import React from 'react';

const NewCardForm = () => {
    return (
        <form>
            <div>
                <h1>Create a new card:</h1>
                <label htmlFor="message">Message:</label>
                <input name="message"></input>
            </div>
            <input type="submit" value="Add Card"></input>
        </form>
    )
}

export default NewCardForm;
