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
    <form onSubmit={submitNewBoard}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={title} onChange={handleTitleChange}/>
        <label htmlFor="owner">Owner's Name</label>
        <input type="text" name="owner" value={owner} onChange={handleOwnerChange}/>
        <p>Preview: {title} - {owner}</p>
        <input type="Submit"></input>
    </form>
    )
};

export default NewBoardForm;