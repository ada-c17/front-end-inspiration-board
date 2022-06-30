import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div>
            <ul>
                <li>Message: {props.message} </li>
                <li>Likes :{props.likes}</li> 
            </ul>
        </div>
    )
};

Card.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Card;
