import './App.css';
import Board from './components/board.js'
import boards from './data/boards.json'

function App() {

  return (
    <div>
      <h1>Inspiration Board</h1>
      <Board boards = {boards}>

      </Board>
    </div>
  );
}

export default App;
