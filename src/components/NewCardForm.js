<<<<<<< HEAD
import { useState } from "react";

const NewCardForm = (props) => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const handleTitleChange = (event) => {setTitle(event.target.value)};
    const handleMessageChange = (event) => {setMessage(event.target.value)};

    const submitNewCard = (event) => {
        event.preventDefault();
        props.createNewCard({ title, message});
        setTitle('');
        setMessage('');
    };

    return (
    <form onSubmit={submitNewCard}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitleChange}/>
        <label htmlFor="message">Message</label>
        <input type="text" name="message" value={message} onChange={handleMessageChange}/>
        <p>Preview: {title} - {message}</p>
        <input type="Submit"></input>
    </form>
    )
};

export default NewCardForm;
=======
>>>>>>> 276d6652902bdc4f9358e77d1a1ad19fc77488d2
