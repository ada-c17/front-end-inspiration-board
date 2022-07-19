import PropTypes from "prop-types";

const Card = (props) => {
    const deleteMe = () => {
        props.deleteCard(props.id)
    };

    const changeLike = () => {
        props.changeLikes(props.id)
    };
    console.log("I am in the card component")
    return (
        <div>
            <ul>
                <li>Message: {props.message} </li>
                <li>Likes :{props.likes}</li>
                <button onClick={changeLike}>+1</button>
                <button onClick={deleteMe}>Delete</button> 
            </ul>
        </div>
    )
};

Card.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Card;
