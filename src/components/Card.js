import React from 'react';

const Card = (props) => {

    return (
        <ul>
            <li>Card Number: {props.card_id}</li>
            <li>Message: {props.message}</li>
            <li>Likes: {props.likesCount}</li>
            {/* <button onClick={increaseLikes}>Increase Likes</button> */}
        </ul>
    )
};

export default Card;