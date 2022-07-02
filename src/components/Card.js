const Card = (props) => {

    const deleteCallback = () => {
        console.log("Delete button pressed!");
        props.onDeleteCallback(props.card.card_id);
    };

    return (
        <div>
            <p>Card ID: {props.card.card_id}</p>
            <p>Message: {props.card.message}</p>
            <p>Like count: {props.card.likes_count}</p>
            <button>Like</button>
            <button onClick={deleteCallback}>Delete</button>
        </div>
    )
};

export default Card;