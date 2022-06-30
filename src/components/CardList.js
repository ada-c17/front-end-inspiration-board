<<<<<<< HEAD


=======
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
        // [
        // <li><Card message={cardData.map} likes="like value goes here"></Card></li>,
        // <li><Card message="text goes here" likes="like value goes here"></Card></li>
    // ];
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
>>>>>>> eee3cf33eac89c23b37064401398d8d681eaf36c
