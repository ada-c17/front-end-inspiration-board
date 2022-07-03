import PropTypes from "prop-types";

const Card = (props) => {
    const deleteMe = () => {
        props.deleteCard(props.id)
    };

    const changeLike = () => {
        props.changeLikes(props.id)
    };

    return (
        <div>
            {/* <div>Title: {props.boardTitle}</div> */}
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
