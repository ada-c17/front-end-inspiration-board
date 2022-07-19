/* eslint-disable camelcase */
import './CardList.css';
import Card from './Card';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";
import axios from "axios";

const CardList = (props) => {
    const cardComponents = (props) => {
        return props.cardsDisplayedOnBoard.map((card) => (
            <Card
                key={card.card_id}
                card_id={card.card_id}
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
            card_id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            likesCount: PropTypes.number.isRequired,
        })
    ).isRequired,
    deleteCardCallback: PropTypes.func,
    likeCardCallback: PropTypes.func,
};

export default CardList;