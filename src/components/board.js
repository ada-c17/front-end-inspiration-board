import React from 'react';
import PropTypes from 'prop-types';
import SingleBoard from './SingleBoard.js'


const Board = (props) =>{
    const boardList = props.boards[0]
    const boardComponents = props.boards.map((board,index) => {
        return (
        <div>
            <SingleBoard
            board_id={board.board_id}
            title={board.title}
            owner={board.owner}
            ></SingleBoard>
        </div>)
    })
    return (<section>{boardComponents}</section>)

}

export default Board;