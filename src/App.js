import {useState, useEffect} from 'react';
import axios from 'axios';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import './App.css';

function App() {
  // STATE(boardsData: ListOfObjects, selectedBoard: id) 
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  const URL = 'https://inspo-board-server.herokuapp.com'

  useEffect(() => {
    axios
      .get(URL+'/boards')
      .then((response) => {
        setBoardsData(() => {
          return response.data.map((board) => {
            return {
              title: board.title,
              boardId: board.board_id,
              owner: board.owner,
              cards: board.cards
            };
          });
        });
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
  return (
    <main className="App">
      <h1>Inspiration Boards</h1>
      <NewBoardForm />
      <NewCardForm />
      <BoardList boardsData={boardsData}/>
      <CardList selectedBoard={selectedBoard} boardsData={boardsData}/>
    </main>
  );
}

export default App;
