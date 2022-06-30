import { useState } from 'react';

const defaultCard = {
    message: ""
}
const NewCardForm = (props) => {

    const [message, setMessage] = useState(defaultCard);
    const onMessageChange = (msg) => { setMessage(msg.target.value) };

    const submitNewCard = (msg) => {
    msg.preventDefault();
    props.postNewCard(message);
    setMessage('');
    };

    return (
    <section className="new-card-form__container">
        <h2>Create a New Card</h2>
        <form onSubmit={submitNewCard} className="new-card-form__form">
            <label>Message</label>
            <input
            type="text"
            className={
                message.length === 0 || message.length > 40
                ? "invalid-form-input"
                : ""
            }
            onChange={onMessageChange}
            value={message}
            ></input>
            <p>Preview: {message}</p>
            <input
            type="Submit"
            disabled={message.length === 0 || message.length > 40}
            className="new-card-form__form-submit-btn"
            ></input>
        </form>
        </section>
    );
};

export default NewCardForm;