import "./App.css";
import NewBoardForm from "./components/NewBoardForm";
import BoardList from "./components/BoardList";

// API call (patch) to update likeCount for a single card
const likeCardAsync = (cardId) => {};

// API call (delete) to delete card by id
const deleteCardAsync = (cardId) => {};

function App() {
  // sample boards data to test BoardList
  // const boardSet = [
  //   { title: "Memes", creator: "Michael Scott" },
  //   { title: "Inspirational Quotes", creator: "Dwight Schrute" },
  //   { title: "Romance Advice", creator: "Kelly Kapoor" },
  // ];

  return (
    <main className="App">
      <h1>Inspiration Board</h1>
      <BoardList boards={boardSet} />
      <NewBoardForm />
    </main>
  );
}

export default App;
