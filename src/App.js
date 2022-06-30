import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Boards from './Components/Boards';


function App() {
  const [boardsData, setBoards] = useState([]);

  useEffect(() => {
    axios.get('https://inspirational-board.herokuapp.com/boards')
      .then((response) => {
        
        // const deepCopy =  JSON.parse(JSON.stringify(response.data));
        // console.log(`deep copy ${deepCopy}`);
        setBoards(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div> 
      <header><h3>Inspirational Boards by Beastly Raptors</h3></header>
      
      <div className='container'> 
          <div className='board-and-card-flex'> 
          <div className='board-wrapper'> 
        <div >{<Boards boards={boardsData} />}</div>
        </div>
        <div>Card quote</div>
        <div>Card quote</div>
        
      </div>
      </div>
      
    </div>
  );
}

export default App;
