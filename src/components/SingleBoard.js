import React from 'react';
import PropTypes from 'prop-types';

const SingleBoard = (props) => {
    return (
        <section>
            {props.owner}
            {props.title}
            {props.board_id}
        </section>)
}

export default SingleBoard;