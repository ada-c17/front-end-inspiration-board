import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Button from './Button';

const CardList = (props) => {
    const cardComponents = props.entries.map((entry) => {
        return (
            <Card
                key = {entry.cardId}
                cardId = {entry.cardId}
                message = {entry.message}
                onDelete = {props.onDeleteCard}></Card>
        );
    });
    return (
        <section>
            <Button text={props.showAdd ? "close form": "add card"}
            onClick={props.onAddCard}></Button>
            {cardComponents}</section>
    );
};

CardList.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteCard: PropTypes.func,
    onAddCard: PropTypes.func,
    showAdd: PropTypes.bool
};

export default CardList;
