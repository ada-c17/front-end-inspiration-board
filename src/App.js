import { useState, useEffect } from "react";
import axios from "axios";
import BoardList from "./components/BoardList";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import "./App.css";

function App() {
  // STATE(boardsData: ListOfObjects, selectedBoard: id)
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(); // Pass in board
  const [boardTitle, setBoardTitle] = useState();

  const URL = "https://inspo-board-server.herokuapp.com";

  console.log(boardsData);
  useEffect(() => {
    axios
      .get(URL + "/boards")
      .then((response) => {
        setBoardsData(() => {
          return response.data.map((board) => {
            return {
              title: board.title,
              boardId: board.board_id,
              owner: board.owner,
              cards: board.cards,
            };
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addBoard = (newBoard) => {
    axios
      .post(URL + "/boards", newBoard)
      .then((response) => {
        setBoardsData((oldBoards) => [
          ...oldBoards,
          {
            ...newBoard,
            boardId: response.data.board_id,
            cards: response.data.cards,
          },
        ]);
        console.log(response);
        console.log(boardsData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCurrentBoard = (id) => {
    const currentBoard = boardsData.filter((board) => board.boardId === id);
    setSelectedBoard(currentBoard[0].boardId);
    setBoardTitle(currentBoard[0].title);
  };

  return (
    <main className="App">
      <nav>
        <h1>Inspiration Boards</h1>
        <NewBoardForm onAddBoard={addBoard} />
        <NewCardForm />
      </nav>
      <BoardList boards={boardsData} onSelectBoard={getCurrentBoard} />
      <h2>Cards for Board: {boardTitle}</h2>
      <CardList selectedBoard={selectedBoard} boardsData={boardsData} />
    </main>
  );
}

export default App;
