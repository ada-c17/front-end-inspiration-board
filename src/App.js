import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Board from './Components/Board';
import BoardList from './Components/BoardList';

export const URL = 'https://ma5en-inspo-board-be.herokuapp.com';

const App = () => {
    const [boardData, setBoardData] = useState([]);
    const [selected, setSelected] = useState({});

    const selectBoard = (boardId) => {
        for (const board of boardData) {
            if (board.id === boardId) {
                setSelected(board);
            }
        }
    };

    const getBoards = () => {
        axios
            .get(`${URL}/boards`)
            .then((response) => {
                const newData = response.data.map((board) => {
                    return {
                        id: board.board_id,
                        title: board.title,
                        owner: board.owner,
                    };
                });
                setBoardData(newData);
            })
            .catch((err) => {
                alert(err);
            });
    };

    useEffect(() => getBoards(), [boardData]);

    const updateBoard = (newBoardInfo) => {
        if (!newBoardInfo['title']) {
            return alert('New board must have a title!');
        }
        if (!newBoardInfo['owner']) {
            return alert('New board must have an owner!');
        }
        axios
            .put(`${URL}/boards/${selected.id}`, newBoardInfo)
            .catch((err) => alert(err));
        const newBoardData = boardData.map((board) => {
            if (board.id === selected.id) {
                return { ...newBoardInfo, id: selected.id };
            } else {
                return board;
            }
        });
        setBoardData(newBoardData);
        setSelected({ ...newBoardInfo, id: selected.id });
    };

    const addBoard = ({ title, owner }) => {
        if (!title) {
            return alert('New board must have a title!');
        }
        if (!owner) {
            return alert('New board must have an owner!');
        }
        axios
            .post(`${URL}/boards`, {
                title: title,
                owner: owner,
            })
            .then((response) => {})
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteBoard = (boardId) => {
        console.log('I am deleteBoard Func');
        setSelected({});
        axios
            .delete(`${URL}/boards/${boardId}`)
            .then((response) => {
                const newBoardData = boardData.filter(
                    (board) => board.id !== boardId
                );
                setBoardData(newBoardData);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='App'>
            <div className='board-container'>
                <div className='board-containter--letter'>
                    <BoardList
                        selectBoard={selectBoard}
                        selected={selected}
                        boards={boardData}
                        onAddBoardCallback={addBoard}
                    />
                </div>
                <div className='board-containter--cork'>
                    {selected.id && (
                        <Board
                            board={selected}
                            onDeleteCallback={deleteBoard}
                            updateBoardCallback={updateBoard}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
