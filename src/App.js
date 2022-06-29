import "./App.css";
import Board from "./components/Board";
import BoardForm from "./components/BoardForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">Inspiration Board</header>
      <main>
        <div>
          <Board /> <BoardForm />
        </div>
      </main>
    </div>
  );
}

export default App;
