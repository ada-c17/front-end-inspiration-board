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
        
        // check th length of title and owner is greater than 40
        if (title.length > 40 || owner.length > 40) {
            alert('Typo needs to be less than 40 characters!');
        }
        // check the length if it is empty
        if (title.length === 0 || owner.length === 0) {
            alert('Please enter your title and name!');
        }
    };

    return (
    <form onSubmit={submitNewBoard} className='new-board-form__form'>
        <label htmlFor="title">Title</label>
        <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleTitleChange}
        className={((title.length > 40)) ? 'invalid-form-input' : ''}></input>
        <br></br>
        <label htmlFor="owner">Owner's Name</label>
        <input 
        type="text" 
        name="owner" 
        value={owner} 
        onChange={handleOwnerChange}
        className={((owner.length > 40)) ? 'invalid-form-input' : ''}></input>
        <p>Preview: {title} - {owner}</p>
        <input 
        type="Submit"
        className='new-board-form__form-submit-btn'></input>
    </form>
    )
};

export default NewBoardForm;