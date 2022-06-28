
import axios from 'axios';
import { useEffect, useState} from 'react';
import './App.css';
import NewBoardForm from './components/NewBoardForm.js';
import Board from './components/Board.js';

function App() {
  const [boardsData, setBoardsData] = useState([]);
  const URL = 'http://localhost:3000/boardsData';
  // const [selectedBoard, setSelectedBoard] = useState({
  //   title: '',
  //   owner: '',
  //   board_id: null
  // });
  useEffect(() => {
    axios.get(URL)
    .then((res) => {
      const newBoards = res.data.map((board) => {
        return {
          title: board.title,
          owner: board.owner,
          board_id: null
        };
      });
      setBoardsData(newBoards);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  // const selectBoard = (board) => { setSelectedBoard(board) };

  // const boardsElements = boardsData.map((board) => {
  //   return (<li>
  //     <Board board={board} onBoardSelect={selectBoard}></Board>
  //   </li>)
  // });

  const createNewBoard = () => {
    axios
    .get(URL)
    .then((res) => {
      console.log('response', res.data.board);
      const boards = [...boardsData];
      boards.push(res.data.board);
      setBoardsData(boards);
    }).catch((error) => {
      console.log('Error:', error);
    });
  }

  // const [isBoardFormVisible, setIsBoardFormVisible] = useState(true);
  // const toggleNewBoardForm = () => {setIsBoardFormVisible(!isBoardFormVisible)}

  // const deleteAll = () => {
  //     axios.delete(URL)
  //     .then((response) => {
  //       console.log('response', response.data  );
  //       setBoardsData([response.data.default_board]);
  //       setSelectedBoard({
  //         title: '',
  //         owner: '',
  //         board_id: null
  //       });
  //     }).catch((error) => {
  //       console.log('Error:', error);
  //       alert('Something went wrong! :(');
  //     });
  // }

  return (
    <div>
      <h1>Inspiration Board</h1>
          <section>
            <h2>Boards</h2>
            <ol className="board_list">
              {/* {boardsElements} */}
            </ol>
          </section>
          <section>
            <h2>Selected Board</h2>
            {/* <p>{selectedBoard.board.id}</p> */}
          </section>
          <section>
            <h2>Create a New Board</h2>
            <NewBoardForm />
          </section>
          
    </div>
  );
}

export default App;
