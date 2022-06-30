import React from 'react';
import PropTypes from 'prop-types';

const SingleBoard = (props) => {
    return (
        <section>
            <ul>
            <li>{props.message}</li>
            <li>{props.likesCount}</li>
            </ul>
        </section>)
}

export default SingleBoard;