import Card from './Card';
import PropTypes from 'prop-types';

const CardList = (props) => {

    const cardComponents = props.cards.map(card => {
        return (
            <li>
                <Card 
                    key={card.card_id}
                    card_id={card.card_id}
                    message={card.messageData} 
                    likes={card.likesData}>
                </Card>
            </li>
        )
    });

    return (
        <section>
            <h2>Card List!</h2>
            <ul>
                {cardComponents}
            </ul>
        </section>
    );
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired
};

export default CardList;