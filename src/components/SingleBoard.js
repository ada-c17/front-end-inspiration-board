import React from 'react';
import PropTypes from 'prop-types';

const SingleBoard = (props) => {
    const onBoardClick = () => {
        props.function(props.board_id)
    }
    return (
        <section onClick={onBoardClick}>
            <ul>
            <li>{props.owner}</li>
            <li>{props.title}</li>
            <li>{props.board_id}</li>
            </ul>
        </section>)


}

export default SingleBoard;