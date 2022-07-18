import React, { useState } from "react";
// import './BoardForm.css';
import PropTypes from "prop-types";

const kDefaultFormState = {
    title: "",
    owner: "",
};

const BoardForm = ({ onAddBoard }) => {
    const [formData, setFormData] = useState(kDefaultFormState);

    const onInput = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        const newFormData = { ...formData, [fieldName]: fieldValue };
        setFormData(newFormData);
    };
    const titleVal = formData.title ? formData.title : '';
    const ownerVal = formData.owner ? formData.owner : '';
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onAddBoard(formData);
        // add error handling for empty title/owner
        // must be a visible display for user
        
        setFormData(kDefaultFormState);
    };

    return (
        <form className="boardInput" onSubmit={handleSubmit}>
            <h4>Add A Dream</h4>
            <h5> ~dream name~ </h5>
            <input
                type="text"
                name="title"
                value= {titleVal}
                onChange={onInput}
            ></input>
            <h5> ~name of dreamer~</h5>
            <input
                type="text"
                name="owner"
                value={ownerVal}
                onChange={onInput}
            ></input>
            <input type="submit" value="Submit"></input>
        </form>
    );
};

BoardForm.propTypes = {
    onAddBoard: PropTypes.func,
};

export default BoardForm;
