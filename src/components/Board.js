import React from 'react';
import ReactDOM from 'react-dom/client';
import './Board.css';
// import CardList from '../components/CardList';



const Board = (props)=> {

    return(

        <div>

            
             <div className={props.className}>
             
            </div>
            <p id="title">{props.name}</p>
          
            {/* <p id = "board_name">Everybody Is A Star</p> */}
          
            {/* <p id = "board_name">Hey Chill Out</p> */}

           
          
        </div>
        

    )

}

export default Board;