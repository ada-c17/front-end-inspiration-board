// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import NewCardForm from './components/CardForm';
import NewBoardForm from './components/BoardForm';

export const URL = 'https://bugbusters-back-end.herokuapp.com/boards';



function App() {
  const [boards, setBoards] = useState([]);
  const [status, setStatus] = useState('Loading...');
  const [currentBoard, setcurrentBoard] = useState({cards:[]})
  const [currentTitle, setcurrentTitle] = useState({title:'NO BOARD SELECTED', board_id:0});
  const [formVisibility, setFormVisibility] = useState({cardForm: false, boardForm:false});
  const [formError, setFormError] = useState({cardForm: false, boardForm: false}); 

  useEffect(() => {
    axios 
      .get(URL)
      .then((res) =>{
        console.log(res.data);
        const newBoards = res.data.map((board) => {
          return {
            board_id: board.board_id,
            title: board.title,
            owner: board.owner,
            cards: board.cards
          };
        });
        setBoards(newBoards);
        console.log(newBoards)
        setStatus('Loaded');
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const options = ["create new board"]
    for (const board of boards){
      let option = {value: board.board_id, label: board.title}
      options.push(option);
    };


  
  const addCard = (message) => {
    axios
      .post(URL + '/' + currentTitle.board_id + '/cards', message)
      .then((res) => {
        console.log(res);
        const newCard = {
          "message": res.data.message
        };
        setcurrentBoard({"cards":[...currentBoard.cards, newCard]});
        console.log(currentBoard);
      })
      .catch((err) => {

        console.log(err.response.data)
        setFormError({"cardForm": true, "boardForm": false})
        
      });

      
      
  };


  const addBoard = (boardInfo) => {
    axios
      .post(URL, boardInfo)
      .then((res) => {
        if (!res.data.board.owner || !res.data.board.title){
          setFormError({"cardForm": false, "boardForm": true});
        }else{
          console.log(res);
          const newBoard = {
            "board_id": res.data.board.board_id,
            "owner": res.data.board.owner,
            "title": res.data.board.title
          };
          setBoards([...boards, newBoard]);
      }
      })
      // .catch((err) => {

      //   console.log(err.response.data)
      //   setFormError({"cardForm": false, "boardForm": true})
   
      // });

      
      
  };



  const changeBoard = (selectedOption) => {
    console.log(selectedOption.value);
    // setFormError({"cardForm": false, "boardForm": false});
    if (selectedOption.value === "create new board"){
      setFormVisibility({
        cardForm: false,
        boardForm: true,
      });
  
    } else {
      setFormVisibility({
        cardForm: true,
        boardForm: false,
      });

      axios
      .get(URL + '/' + selectedOption.value + '/cards')
      .then((res) => {
        setcurrentBoard(res.data);
      });
    }
  };

  const onRemoveCard = (id) => {
    return axios.delete(URL + '/' + currentTitle.board_id + '/cards/' + id)
      .then(() => {

          
        const newBoardData = (oldBoardData) => {
          return oldBoardData.cards.filter(card => {
            console.log(card);
            return card.card_id !== id;
          }); 
        }

        setcurrentBoard({'cards': newBoardData(currentBoard)});
        console.log(currentBoard);
      })
      .catch(error => {
        console.log(error);
        throw new Error(`error deleting card ${id}`);
      });
  };

  const increaseLikes = (card_id) => {
    console.log(card_id);
    console.log(currentTitle.board_id);
    axios.patch(URL + '/' + currentTitle.board_id + '/cards/' + card_id)
    .then(() => {changeBoard({"value":currentTitle.board_id})});



  };

  const changeBoardTitle = (selectedOption) => {
    console.log(selectedOption.value);
    if (selectedOption.value !== "create new board") {
      const newBoardById = boards.filter((board) => board.board_id === selectedOption.value);
      console.log(newBoardById);
      console.log(newBoardById[0].title);
      setcurrentTitle(newBoardById[0]);
    }
  };

  return (
    
    <div>
      <span>
        <div className='header'>
          <h1 className='header-main'>Bug Busters</h1>
          <h2 className='header-board'>{currentTitle.title}</h2>
          <section className='board-select'>
          <Dropdown className='dropdown' options={options} placeholder="Select a board to begin" onChange={(e) => {changeBoard(e); changeBoardTitle(e)}}/>
          </section>
        
          <div className='form' style={{display: formVisibility.cardForm ? 'block': 'none'}}  id={formError.cardForm === true ? 'errorDisplay' : ''}>
            <NewCardForm onAddCardCallback={addCard} board_title={currentTitle.title}/> 
          </div>
          <div className='form' style={{display: formVisibility.boardForm ? 'block': 'none'}} id={formError.boardForm === true ? 'errorDisplay' : ''}>
            <NewBoardForm onAddBoardCallback={addBoard}/> 
          </div>
        </div>
      </span>
      <Board className='cards' cards={currentBoard.cards}  increaseLikes={increaseLikes} deleteCard={onRemoveCard}/>
      
    </div>
  );
};

export default App;
