import { BiCheck } from 'react-icons/bi';
import PropTypes from 'prop-types';
import './Styles/SortBoardMenu.css';

const SortBoardMenu = ({
    sortBy,
    onSortByChange,
    orderBy,
    onOrderByChange,
}) => {
    return (
        <section id='sort-board-menu'>
            <h4 className='sort-board-menu--label'>sort by</h4>
            <button
                onClick={() => onSortByChange('title')}
                className='board-menu-item'>
                title{' '}
                {sortBy === 'title' && <BiCheck id='board-menu--check-mark' />}
            </button>
            <button
                onClick={() => onSortByChange('owner')}
                className='board-menu-item'>
                owner{' '}
                {sortBy === 'owner' && <BiCheck id='board-menu--check-mark' />}
            </button>
            <button
                onClick={() => onSortByChange('id')}
                className='board-menu-item'>
                date added{' '}
                {sortBy === 'id' && <BiCheck id='board-menu--check-mark' />}
            </button>
            <br />
            <h4 className='sort-board-menu--label'>order</h4>
            <button
                onClick={() => onOrderByChange('asc')}
                className='board-menu-item'>
                ascending{' '}
                {orderBy === 'asc' && <BiCheck id='board-menu--check-mark' />}
            </button>
            <button
                onClick={() => onOrderByChange('desc')}
                className='board-menu-item'>
                descending{' '}
                {orderBy === 'desc' && <BiCheck id='board-menu--check-mark' />}
            </button>
        </section>
    );
};

SortBoardMenu.propTypes = {
    sortBy: PropTypes.string.isRequired,
    onSortByChange: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired,
    onOrderByChange: PropTypes.func.isRequired,
};

export default SortBoardMenu;
