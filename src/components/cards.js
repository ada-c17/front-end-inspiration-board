import React from 'react';
import PropTypes from 'prop-types';
import SingleCard from './SingleCard.js'


const Card = (props) =>{
    if (props.board_id === {}){
        return null
    }
    const cardComponents = props.board_id.cards.map((card,index) => {
        return (
        <div>
            <SingleCard
            card_id={card.card_id}
            message={card.message}
            likesCount={card.likesCount}
            ></SingleCard>
        </div>)
    })
    return (<section>{cardComponents}</section>)

}

export default Card;