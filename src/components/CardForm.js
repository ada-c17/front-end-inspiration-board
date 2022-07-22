import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CardForm.css';

const NewCardForm = ({onAddCardCallback, board_title}) => {
    const [cardData, setCardData] = useState({
    "message": ''
    });

    const submitCardData = (e) => {
    e.preventDefault();

    onAddCardCallback({
        "message":cardData.message
    });
    setCardData({ "message": cardData.message});
    };

    const handleChange = (e) => {
    setCardData({"message": e.target.value });
    };

    return (
    <form onSubmit={submitCardData} className="new-card-form">
        <section>
            <h2>Add a Card to {board_title}</h2>
            <div className="new-card-fields">
                <label htmlFor="message">Message</label>
                <input
                name="message"
                id="message"
                value={cardData.message}
                onChange={handleChange}
                />
                <button className="button-new-card-submit" type="submit">
                Add Card
                </button>
            </div>
        </section>
    </form>
    );
};

NewCardForm.propTypes = {
    onAddCardCallback: PropTypes.func.isRequired,
    board_title: PropTypes.string.isRequired
};

export default NewCardForm;