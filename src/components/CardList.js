import React from "react";
import PropTypes from "prop-types";
import Card from "./Card"

const CardList = ({ cards }) => {
    const cardComponents = cards.map((card) => {
    return (
        <Card
        key={card.card_id}
        card_id={card.card_id}
        message={card.message}
        onUpdate={cards.onUpdate}
    />
    );
});

    return (
    <section>
        {cardComponents}
    </section>
    );
};

CardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    onUpdate: PropTypes.func,
};

export default CardList;