import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineForm } from 'react-icons/ai';

const UpdateCardForm = ({ updateCardCallback, cardId }) => {
    const [message, setMessage] = useState('');
    const [hide, setHide] = useState(true);

    const updateFormData = (e) => {
        setMessage(e.target.value);
    };

    const updateCard = (e) => {
        e.preventDefault();
        updateCardCallback(cardId, message);
        setHide(true);
        setMessage('');
    };

    const shown = hide ? 'hidden' : 'shown';

    return (
        <div>
            <AiOutlineForm
                className='card-icons'
                size={20}
                onClick={() => setHide(!hide)}>
                {hide ? 'Show' : 'Hide'}
            </AiOutlineForm>
            <div className={shown}>
                <form onSubmit={updateCard}>
                    <label htmlFor='message'>Message</label>
                    <input
                        onChange={updateFormData}
                        name='title'
                        id='title'
                        type='text'
                        value={message}
                    />
                    <button type='submit'>Update</button>
                </form>
            </div>
        </div>
    );
};

UpdateCardForm.propTypes = {
    updateCardCallback: PropTypes.func.isRequired,
    cardId: PropTypes.number.isRequired,
};

export default UpdateCardForm;
