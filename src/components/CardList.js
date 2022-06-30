import Card from './Card';

const CardList = () => {
    return (
        <section>
            <h2>Card List!</h2>
            <ul>
                <li><Card></Card></li>
                <li><Card></Card></li>
            </ul>
        </section>
    );
};

export default CardList;