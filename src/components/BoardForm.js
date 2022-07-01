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

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddBoard(formData);
        setFormData(kDefaultFormState);
    };

    return (
        <form className="boardInput" onSubmit={handleSubmit}>
            <h4>Add Board</h4>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={onInput}
            ></input>
            <input
                type="text"
                name="owner"
                value={formData.owner}
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
