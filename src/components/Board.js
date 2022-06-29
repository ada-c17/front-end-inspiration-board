import PropTypes from 'prop-types';
import NewBoardForm from './NewBoardForm';


const Board = (props) => {
    const newBoard = props.entries.map((entry) => {
        return (
            <NewBoardForm 
            board_Id={entry.id}
            owner={entry.owner}
            title={entry.title}
            />
        );
    });
    return (
        <div>{newBoard}</div>
    )
};



Board.propTypes = {
    board_Id: PropTypes.number.isRequired,
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Board;