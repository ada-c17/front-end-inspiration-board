import './App.css';
import Board from './components/boards.js'
import boards from './data/boards.json'
import Card from './components/cards.js'

function App() {
  
  let cards = <section></section>
  const showCards = (id) =>{
    let specificBoard = boards.find(element=>element.board_id===id)
    cards = <Card board_id={specificBoard}></Card>
    
  }
  
  return (
    <div>
      <h1>Inspiration Board</h1>
      <Board boards={boards} showCardsFunction={showCards}>

      </Board>
      {cards}
    </div>
  );
}

export default App;
