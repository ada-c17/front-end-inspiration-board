import PropTypes from "prop-types";

const BackButton = (props) => {
  const goBack = () => props.setIsOnHomepage(true);
  return (
    <button onClick={goBack}>
      <h1>⬅</h1>
    </button>
  );
};

BackButton.propTypes = {
  setIsOnHomepage: PropTypes.func.isRequired,
};

export default BackButton;
