const Card = (props) => {

    // return (
    //     <ul>
    //         <li>Card Number: {props.card_id}</li>
    //         <li>Message: {props.message}</li>
    //         <li>Likes: {props.likesCount}</li>
    //         {/* <button onClick={increaseLikes}>Increase Likes</button> */}
    //     </ul>
    // )
    return (
        <div>
            <p>Message: {props.card.message}</p>
            <p>Like count: {props.card.likes_count}</p>
            <button>Delete</button>
        </div>
    )
};

export default Card;