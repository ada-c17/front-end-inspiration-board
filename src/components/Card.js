import React from 'react';
import { useState } from 'react';

const Card = (props) => {

    const [likesCount, setLikesCount] = useState(0);

    const increaseLikes = () => {
        console.log(`Inside increaseLikes!`);
        setLikesCount(likesCount + 1);
    };

    return (
        <ul>
            <li>Card Number: {props.card_id}</li>
            <li>Message: {props.message}</li>
            <li>Likes: {likesCount}</li>
            <button onClick={increaseLikes}>Increase Likes</button>
        </ul>
    )
};

export default Card;