import "./Board.css";
import PropTypes from "prop-types";

const BoardName = (props) => {
  const fetchTheCard = () => {
    console.log("in the fetch card function");
    props.cardsCallback(props.id)
  }; 

  return (
    <div>
      <div>
        <li onClick={fetchTheCard}> Title: {props.title}</li>
        {/* <li> Title: {props.title}</li> */}
      </div>
    </div>
  );
};

BoardName.propTypes = {
  title: PropTypes.string.isRequired,
  cardsCallback: PropTypes.func.isRequired,
};

export default BoardName;
