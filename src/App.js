import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import NewBoardForm from './components/NewBoardForm.js';
import Board from './components/Board.js';
import CardList from './components/CardList.js';

function App() {

  const [boardsData, setBoardsData] = useState([]);

  const URL = 'https://insp-board-migrationmess.herokuapp.com/boards';
  // when we first load 
  const [selectedBoard, setSelectedBoard] = useState({
    title: '',
    owner: '',
    board_id: null
  });
  
  const fetchBoards = () => {
    axios
      .get(URL)
      .then((res) => {
        const newBoards = res.data.map((board) => {
          return {
            key: board.board_id,
            board_id: board.board_id,
            title: board.title,
            owner: board.owner
          };
        });
        setBoardsData(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(fetchBoards, []);

  const selectBoard = (board) => { setSelectedBoard(board) };

  const boardsElements = boardsData.map((board) => {
    return (<li>
      <Board board={board} onBoardSelect={selectBoard}></Board>
    </li>)
  });

  const createNewBoard = (boardInfo) => {
    axios
      .post(URL, boardInfo)
      .then((response) => {
        if (boardInfo.title && boardInfo.owner) {
          console.log(response);
          fetchBoards();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  const toggleNewBoardForm = () => {setIsBoardFormVisible(!isBoardFormVisible)}


  return (
    <div className="page__container">
      <div className="content__container">
      <h1>Inspiration Board</h1>
          <section className="boards__container">
            <section>
              <h2>Boards</h2>
              <ol className="boards__list">
                {boardsElements}
              </ol>
          </section>
          <section>
            <h2>Selected Board</h2>
            <p className='boards__selected'>{selectedBoard.board_id ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'Select a Board from the Board List!'}</p>
          </section>
          <section className="new-board-form__container">
            <h2>Create a New Board</h2>
            {isBoardFormVisible ? <NewBoardForm createNewBoard={createNewBoard}></NewBoardForm> : ''}
            <span onClick={toggleNewBoardForm} className='new-board-form__toggle-btn'>{isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form'}</span>
          </section>
          </section>
            {selectedBoard.board_id ? <CardList board={selectedBoard}></CardList> : ''}
      </div>
    </div>
  );
};

export default App;
