import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Button from './Button';

const CardList = (props) => {
    const cardComponents = props.cards.map((card) => {
        return (
            <Card
                key = {card.id}
                cardId = {card.id}
                message = {card.message}
                likes_count = {card.likes_count}
                onDelete = {props.onDeleteCard}
                onLike = {props.onLikeCard}></Card>
        );
    });
    return (
        <section className="card-container">
            {cardComponents}
            <Button text={props.showAdd ? "hide add note form": "add a note"} color={props.showAdd ? "#a3905c": "#b9af63"}
            onClick={props.onAddCard}></Button></section>
    );
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteCard: PropTypes.func,
    onAddCard: PropTypes.func,
    onLikeCard: PropTypes.func,
    showAdd: PropTypes.bool
};

export default CardList;
