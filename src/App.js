import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"><h1>Inspiration Board</h1>
        
      </header>
      <body>
        <div class="board">
          <h2>Boards</h2>
          <ol>
            <li>vida</li>
            <li>Nish</li>
          </ol>
        </div>
        <div class="selected-board">
          <h2>Selected Boards</h2>
        </div>
        <div class="New-board">
          <h2>Create a New Board</h2>
        </div>

      </body>
    </div>
  );
}

export default App;
