import PropTypes from "prop-types";

const Card = (props) => {
    const deleteMe = () => {
        props.deleteCard(props.id)
    };

    return (
        <div>
            <ul>
                <li>Message: {props.message} </li>
                <li>Likes :{props.likes}</li>
                <button onClick={deleteMe}>Delete</button> 
            </ul>
        </div>
    )
};

Card.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Card;
