import PropTypes from "prop-types";

const PlusBox = ({ setUpdating, elementType }) => {
  const showForm = () => setUpdating(true);
  return (
    <section className="single-box-container">
      <section className="single-box pointer" onClick={showForm}>
        <h2>➕</h2>
      </section>
    </section>
  );
};

PlusBox.propTypes = {
  setUpdating: PropTypes.func.isRequired,
  elementType: PropTypes.string.isRequired,
};

export default PlusBox;
