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
        <section className='new-card-form__container'>
            <h2>Create a New Card</h2>
            <form onSubmit={submitNewCard} className='new-card-form__form'>
                <label htmlFor="message">Message</label>
                <input 
                type="text" 
                className={message.length === 0 || message.length > 40 ? "invalid-form-input" : ""}
                value={message} 
                onChange={handleMessageChange}></input>
                <p>Preview: {message}</p>
                <input 
                type="Submit"
                disabled= {message.length === 0 || message.length > 40}
                className='new-card-form__form-submit-btn'></input>
            </form>
        </section>
    )
};

export default NewCardForm;
