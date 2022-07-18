import './App.css';
import Board from './components/boards.js'
import boards from './data/boards.json'
import Card from './components/cards.js'
import {useState} from 'react'
import SingleBoard from './components/SingleBoard.js'

function App() {
  const [isOnHomepage, setIsOnHomepage] = useState(true)
  const [activeBoard, setActiveBoard] = useState(
    {
    "board_id": 1,
    "title": "my dream farm",
    "owner" : "philomena",
    "cards" : [
      {
      "card_id": 1,
      "message": "i love chickens",
      "likesCount" : 0
      },
      {
        "card_id": 2,
        "message": "i also love ducks",
        "likesCount": 0
      }]
    })

  if (isOnHomepage){
    return (
      <div>
        <div>
          <h1>Inspiration Board</h1>
          <Board boards={boards} setActiveBoard={setActiveBoard} setIsOnHomepage={setIsOnHomepage} isOnHomepage={isOnHomepage}>
  
          </Board>
        </div>
        </div>
    );
  } else {
    // return(<div></div>)
    return(<SingleBoard board={activeBoard} setActiveBoard={setActiveBoard} setIsOnHomepage={setIsOnHomepage}>
      
      </SingleBoard>)
  }
}

export default App;
