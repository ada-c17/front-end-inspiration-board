import "./CardForm.css";
import PropTypes from "prop-types";
import {useState} from 'react';

const defaultCard = {"message": ""}

const CardForm = (props) => {
    
    const [cardData, setCardData] = useState(defaultCard);

    const handleFormInput = (event) => {
        const inputElement = event.target;
        const name = inputElement.name;
        const value = inputElement.value;

        const newCardData = {...cardData};
        newCardData[name] = value;
        console.log(newCardData);
        setCardData(newCardData);
    };

    const handleFormSubmission = (event) => {
        event.preventDefault();
        console.log(props);
        props.handleSubmission(cardData);
    };

    return (
        <form onSubmit={handleFormSubmission}>
            <label>Message</label><input name="message" type="text" value={cardData.message} onChange={handleFormInput}/>
            {/* <label>Likes</label><input name="likesCount" type="text" value={cardData.likesCount} onChange={handleFormInput}/> */}
            <input type="submit" />
        </form>
    )
};

CardForm.propTypes = {
    handleSubmission:PropTypes.func.isRequired,
}

export default CardForm;
