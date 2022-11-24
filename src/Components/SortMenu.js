import { BiCheck } from 'react-icons/bi';
import './Styles/SortMenu.css';
import PropTypes from 'prop-types';

const SortMenu = ({ sortBy, onSortByChange, orderBy, onOrderByChange }) => {
    return (
        <section id='sort-menu'>
            <h3 className='sort-menu-label'>Sort By</h3>
            <button
                onClick={() => onSortByChange('likeCount')}
                className='menu-item'>
                likes {sortBy === 'likeCount' && <BiCheck id='checkMark' />}
            </button>
            <button onClick={() => onSortByChange('id')} className='menu-item'>
                date added {sortBy === 'id' && <BiCheck id='checkMark' />}
            </button>
            <button
                onClick={() => onSortByChange('message')}
                className='menu-item'>
                message {sortBy === 'message' && <BiCheck id='checkMark' />}
            </button>
            <h3 className='sort-menu-label'>Order</h3>
            <button
                onClick={() => onOrderByChange('asc')}
                className='menu-item'>
                ascending {orderBy === 'asc' && <BiCheck id='checkMark' />}
            </button>
            <button
                onClick={() => onOrderByChange('desc')}
                className='menu-item'>
                descending {orderBy === 'desc' && <BiCheck id='checkMark' />}
            </button>
        </section>
    );
};

SortMenu.propTypes = {
    sortBy: PropTypes.string.isRequired,
    onSortByChange: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired,
    onOrderByChange: PropTypes.func.isRequired,
};

export default SortMenu;
