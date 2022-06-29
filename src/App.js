import "./App.css";
import Board from "./components/Board";
import BoardForm from "./components/BoardForm";
import CardForm from "./components/CardForm";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <h2>Boards</h2>
        <BoardList />
        <h2>Selected Board</h2>
        <Board />
        <h2>Cards for Pick-Me-Up Quotes</h2>
        <CardList />
        <h2>Create a New Board</h2>
        <BoardForm />
        <h2>Create a New Card</h2>
        <CardForm />
      </main>
    </div>
  );
}

export default App;
