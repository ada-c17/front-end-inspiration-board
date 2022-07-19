/* eslint-disable camelcase */
import './CardList.css';
import Card from './Card';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";


const CardList = (props) => {
    const cardComponents = (props) => {
        return props.cardsDisplayedOnBoard.map((card) => (
            <Card
                key={card.id}
                card_id={card.id}
                message={card.message}
                likes_count={card.likes_count}
                deleteCardCallback={props.deleteCardCallback}
                likeCardCallback={props.likeCardCallback}
            />
        ));
    };
    return <ul>{cardComponents(props)}</ul>;
};

CardList.propTypes = {
    cardsDisplayedOnBoard: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likes_count: PropTypes.number.isRequired,
        })
    ).isRequired,
    deleteCardCallback: PropTypes.func,
    likeCardCallback: PropTypes.func,
};

export default CardList;