import "./App.css";
// import Home from "./components/Home.js";
import BoardForm from "./components/BoardForm";

function App() {
  const makeNewBoard = (data) => {
    console.log("Making New Board");
  };
  return (
    <div className="App">
      <main>
        <h1>Inspiration from the OtterSpace</h1>
        <BoardForm handleSubmission={makeNewBoard} />
      </main>
      <footer>
        &copy; 2022 Ada Developers Academy ✨ by Coders from the OtterSpace ✨
        Doina ✨ Fena ✨ Marlyn ✨ Nina ✨
      </footer>
    </div>
  );
}

export default App;
