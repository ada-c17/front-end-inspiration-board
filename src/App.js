import "./App.css";
import Board from "./components/Board";
import BoardForm from "./components/BoardForm";
import BoardList from "./components/BoardList";

function App() {
  const boards = [
    { board_id: 1, title: "pick-me-up", owner: "Ada" },
    { board_id: 2, title: "notes to code to", owner: "Ada" },
  ];
  return (
    <div className="App">
      <div className="App-wrapper">
        <header className="App-header">Inspiration Board</header>
        <main className="Main">
          <div className="Boards">
            <BoardList boards={boards} />
            <section className="Board-form">
              <BoardForm />
            </section>
          </div>
          <div className="Board-display"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
