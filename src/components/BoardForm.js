import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BoardForm.css';


const kNewBoardData = {
    title: '',
    owner: '',

};

const NewBoardForm = ({onAddBoardCallback}) => {
    const [boardData, setBoardData] = useState(kNewBoardData); 


    const handleChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;

    
        setBoardData(oldData => ({ ...oldData, [fieldName]: value }));
    };



    const submitBoardData = (e) => {
      
        e.preventDefault();
    
        // if (!boardData.title) { return; }
    
        // reset the form back to its default values. This won't affect the value
        // of taskData until React re-renders, so we are still free to use it in
        // the remainder of this function
        setBoardData(kNewBoardData);



    onAddBoardCallback(boardData);
    };


    return (
    <form onSubmit={submitBoardData} className="new-board-form">
        <section>
            <h2>Create a new bug board</h2>
            <div className="new-card-fields">
                <label htmlFor="title">Title</label>
                <input
                name="title"
                id="title"
                value={boardData.title}
                onChange={handleChange}
                />
                <label htmlFor="owner">Owner</label>
                <input
                name="owner"
                id="owner"
                value={boardData.owner}
                onChange={handleChange}
                />
                <button className="button-new-board-submit" type="submit">
                Add Board
                </button>
            </div>
        </section>
    </form>
    );
};

NewBoardForm.propTypes = {
    onAddBoardCallback: PropTypes.func.isRequired,
};


export default NewBoardForm;