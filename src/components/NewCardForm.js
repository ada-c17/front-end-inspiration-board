import { useState } from "react";

const NewCardForm = (props) => {
    const [message, setMessage] = useState('');
    const handleMessageChange = (event) => {setMessage(event.target.value)};

    const submitNewCard = (event) => {
        event.preventDefault();
        props.createNewCard(message);
        setMessage('');
    };

    return (
        <section>
            <h2>Create a New Card</h2>
            <form onSubmit={submitNewCard}>
                <label htmlFor="message">Message</label>
                <input type="text" name="message" value={message} onChange={handleMessageChange}/>
                <p>Preview: {message}</p>
                <input type="Submit"></input>
            </form>
        </section>
    )
};

export default NewCardForm;
