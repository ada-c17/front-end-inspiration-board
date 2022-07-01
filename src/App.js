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
  const [selectedBoard, setSelectedBoard] = useState(2);

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

  const addBoard = newBoard => {
    axios
    .post(URL + '/boards', newBoard)
    .then((response) => {
      setBoardsData(oldBoards => [...oldBoards, {...newBoard, boardId: response.data.board_id, cards: response.data.cards}]);
      console.log(response);
      console.log(boardsData);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const getBoardDataAndId = (selectedBoard) => {
    let selectedBoardData;
    let boardIndex;
      for (const [index, board] of boardsData.entries()){
        if (board.boardId === selectedBoard){
          selectedBoardData = board;
          boardIndex = index;
        };
      };
      return [selectedBoardData, boardIndex]
  };

  const addCard = (newCard) => {
    axios
    .post(URL + '/boards/' + selectedBoard + '/cards', newCard)
    .then((response) => {
      const [selectedBoardData, boardIndex] = getBoardDataAndId(selectedBoard);
      const updatedBoard = {...selectedBoardData, cards: [...selectedBoardData.cards, response.data]};
      const updatedBoardsData = [...boardsData]
      updatedBoardsData[boardIndex] = updatedBoard;
      setBoardsData(updatedBoardsData);
    })
    .catch((error) => 
    {console.log(error)});
  };
  
  return (
    <main className="App">
      <nav>
      <h1>Inspiration Boards</h1>
      <NewBoardForm onAddBoard = {addBoard}/>
      <NewCardForm onAddCard = {addCard}/>
      </nav>
      <BoardList boardsData={boardsData}/>
      <CardList boardsData={boardsData}/>
    </main>
  );
}

export default App;
