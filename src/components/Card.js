import React from 'react';

const Card = (props) => {
    return (
        <ul>
            <li>Message: {props.message}</li>
            <li>Likes: {props.likes}</li>
        </ul>
    )
};

export default Card;