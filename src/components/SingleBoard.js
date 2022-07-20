import React from 'react';
import Card from './cards.js'
import "./SingleBoard.css";

const SingleBoard = (props) => {
    const clickMe = () =>{
        props.setIsOnHomepage(false)
        console.log(props.board)
        props.setActiveBoard(props.board)
    }
    
    if (props.isOnHomepage){
        return (
            <section className="single-board" onClick={clickMe}>
                <ul>
                <li>{props.board.owner}</li>
                <li>{props.board.title}</li>
                {/* <li>{props.board_id}</li> */}
                </ul>
            </section>)
    } else {
        return (
            <section onClick={clickMe}>
                <ul>
                <li>{props.board.owner}</li>
                <li>{props.board.title}</li>
                {/* <li>{props.board_id}</li> */}
                </ul>

                <Card activeBoard = {props.board}></Card>
            </section>)
    }

}

export default SingleBoard;