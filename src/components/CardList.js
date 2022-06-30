import Card from './Card';

const CardList = () => {

    const cardData = [
        {
            messageData: 'hi',
            likesData: 5
        },
        {
            messageData: 'bye',
            likesData: 10
        }
    ];

    const cardComponents = cardData.map(card => {
        return (
            <li><Card message={card.messageData} likes={card.likesData}></Card></li>
        );
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

export default CardList;