import { useState } from "react";

const NewBoardForm = (props) => {
    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');
    const handleTitleChange = (event) => {setTitle(event.target.value)};
    const handleOwnerChange = (event) => {setOwner(event.target.value)};

    const submitNewBoard = (event) => {
        event.preventDefault();
        props.createNewBoard({ title, owner});
        setTitle('');
        setOwner('');
    };

    return (
    <form onSubmit={submitNewBoard} className='new-board-form__form'>
        <label htmlFor="title">Title</label>
        <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleTitleChange}
        className={((title.length === 0) || (title.length > 40)) ? 'invalid-form-input' : ''}></input>
        <label htmlFor="owner">Owner's Name</label>
        <input 
        type="text" 
        name="owner" 
        value={owner} 
        onChange={handleOwnerChange}
        className={((owner.length === 0) || (owner.length > 40)) ? 'invalid-form-input' : ''}></input>
        <p>Preview: {title} - {owner}</p>
        <input 
        type="Submit"
        // disabled={((title.length === 0) || (owner.length === 0) || (title.length > 40) || (owner.length > 40))}
        disabled={((title.length === 0) || (owner.length === 0) || (title.length > 40) || (owner.length > 40))}
        className='new-board-form__form-submit-btn'></input>
    </form>
    )
};

export default NewBoardForm;