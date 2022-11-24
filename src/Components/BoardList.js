import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SortBoardMenu from './SortBoardMenu';
import { BiSort } from 'react-icons/bi';
import NewBoardForm from './Forms/NewBoardForm';
import './Styles/SortBoardMenu.css';

const BoardList = ({ boards, selected, selectBoard, onAddBoardCallback }) => {
    const [sortBy, setSortBy] = useState('id');
    const [orderBy, setOrderBy] = useState('desc');
    const [hide, setHide] = useState(true);

    const shown = hide ? 'hidden' : 'shown';

    const sortedBoards = boards.sort((a, b) => {
        let order = orderBy === 'asc' ? 1 : -1;
        let sortByA = sortBy === 'id' ? a[sortBy] : a[sortBy].toLowerCase();
        let sortByB = sortBy === 'id' ? b[sortBy] : b[sortBy].toLowerCase();
        return sortByA < sortByB ? -1 * order : 1 * order;
    });

    const displayBoard = () => {
        return sortedBoards.map((board, index) => {
            return (
                <li
                    className={
                        board.id === selected.id
                            ? 'board-menu-item__selected'
                            : null
                    }
                    key={index}
                    onClick={() => selectBoard(board.id)}>
                    {board.title}
                </li>
            );
        });
    };

    return (
        <section>
            <div>
                <h1 id='page-title'>ma5en's Inspo Board</h1>
                <div className='board-list--icons'>
                    <NewBoardForm onAddBoardCallback={onAddBoardCallback} />
                    <BiSort
                        className='icons'
                        size={30}
                        onClick={() => setHide(!hide)}></BiSort>
                </div>
                <section className={shown}>
                    <div className='sort-menu--container'>
                        <SortBoardMenu
                            sortBy={sortBy}
                            onSortByChange={(sortOption) => {
                                setSortBy(sortOption);
                            }}
                            orderBy={orderBy}
                            onOrderByChange={(orderOption) => {
                                setOrderBy(orderOption);
                            }}
                        />
                    </div>
                </section>
            </div>
            <ul>{displayBoard()}</ul>
        </section>
    );
};

BoardList.propTypes = {
    boards: PropTypes.array.isRequired,
    selectBoard: PropTypes.func.isRequired,
    onAddBoardCallback: PropTypes.func.isRequired,
};

export default BoardList;
