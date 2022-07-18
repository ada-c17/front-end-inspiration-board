import React from 'react';
import PropTypes from 'prop-types';

const SingleCard = (props) => {
    return (
        <section>
            <ul>
            <li>{props.message}</li>
            <li>{props.likesCount}</li>
            </ul>
        </section>)
}

export default SingleCard;