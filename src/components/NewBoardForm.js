import React from 'react';
import './Board.js';
import PropTypes from 'prop-types';


const NewBoardForm = ({board_id, owner, title}) => {
    const updatedEntry = {
        board_id: board_id, owner:owner, title:title
    };
    NewBoardForm(updatedEntry)
    return (
        <div className="board"></div>
    )
};











NewBoardForm.propTypes = {
    board_id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default NewBoardForm;