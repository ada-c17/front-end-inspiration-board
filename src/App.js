
import axios from 'axios';
import { useEffect, useState} from 'react';
import './App.css';
import NewBoardForm from './components/NewBoardForm.js';
import Board from './components/Board.js';

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const URL = 'http://localhost:5000/boards';
  // when we first load 
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: null
  });
  useEffect(() => {
    axios.get(URL)
    .then((res) => {
      setBoardsData(res.data);
      });
  }, []);

  const selectBoard = (board) => { setSelectedBoard(board) };

  const boardsElements = boardsData.map((board) => {
    return (<li>
      <Board board={board} onBoardSelect={selectBoard}></Board>
    </li>)
  });

  const createNewBoard = (newBoard) => {
    axios
    .post(`${URL}`, newBoard)
    .then((res) => {
      console.log('response', res.data.board);
      const boards = [...boardsData];
      boards.push(res.data.board);
      setBoardsData(boards);
    }).catch((error) => {
      console.log('Error:', error);
    });
  }

  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const toggleNewBoardForm = () => {setIsBoardFormVisible(!isBoardFormVisible)}

  return (
    <div>
      <h1>Inspiration Board</h1>
          <section>
            <h2>Boards</h2>
            <ol className="board_list">
              {boardsElements}
            </ol>
          </section>
          <section>
            <h2>Selected Board</h2>
            <p>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'Select a Board from the Board List!'}</p>
          </section>
          <section>
            <h2>Create a New Board</h2>
            {isBoardFormVisible ? <NewBoardForm createNewBoard={createNewBoard}></NewBoardForm> : ''}
            <span onClick={toggleNewBoardForm} className='hideForm__button'>{isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form'}</span>
          </section>
    </div>
  );
}

export default App;
