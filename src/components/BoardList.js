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
                onToggle = {props.onToggle}
                selected = {props.selected}>
                </Board>
        );
    });
    return (
        <section>
            <h2>Mountains of Topics</h2>
            {boardComponents}
            <Button text={props.showAdd ? "hide add topic form": "add a topic"} color={props.showAdd ? "#a3905c": "#b9af63"}
            onClick={props.onAddBoard}></Button></section>
    );
};

BoardList.propTypes = {
    boards: PropTypes.arrayOf(PropTypes.object).isRequired,
    showAdd: PropTypes.bool,
    onAddBoard: PropTypes.func,
    onToggle: PropTypes.func,
    selected: PropTypes.bool
};

export default BoardList;
