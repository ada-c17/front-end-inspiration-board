const Card = (props) => {

    const deleteCallback = () => {
        console.log("Delete button pressed!");
        props.onDeleteCallback(props.card.card_id);
    };

    return (
        <div className='card-item'>
            <p className='card-item__message'>{props.card.message}</p>
            <ul className='card-item__controls'>
            <li><p>{props.card.likes_count} 💕</p></li>
            <li><p><button>Like</button></p></li>
            <li><p className='card-item__delete'><button onClick={deleteCallback}>Delete</button></p></li>
            </ul>
        </div>
    )
};

export default Card;