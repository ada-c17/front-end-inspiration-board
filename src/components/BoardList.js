import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import Button from './Button';

const BoardList = (props) => {
    const boardComponents = props.boards.map((board) => {
        return (
            <Board
                key = {board.id}
                boardId = {board.id}
                title = {board.title}
                owner = {board.owner}
                onToggle = {props.onToggle}>
                </Board>
        );
    });
    return (
        <section>
            <h2>All Boards</h2>
            {boardComponents}
            <Button text={props.showAdd ? "hide add board form": "add board"}
            onClick={props.onAddBoard}></Button></section>
    );
};

BoardList.propTypes = {
    boards: PropTypes.arrayOf(PropTypes.object).isRequired,
    showAdd: PropTypes.bool,
    onAddBoard: PropTypes.func,
    onToggle: PropTypes.func
};

export default BoardList;
