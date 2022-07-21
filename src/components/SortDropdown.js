import React from "react";
import PropTypes from "prop-types";

const SortDropdown = (props) => {
  const handleOrderChange = (event) => {
    props.updateSortOrder(event.target.value);
  };

  const handleTypeChange = (event) => {
    props.updateSortType(event.target.value);
  };

  return (
    <>
      <form className="dropdown-sort">
        <label htmlFor="cardOrder"></label>
        <select
          name="cardOrder"
          id="card_order_dd_select"
          onChange={handleOrderChange}
        >
          <option defaultValue key="1" value="">
            Sort Order
          </option>
          <option key="2" value="Ascending">
            Ascending
          </option>
          <option key="3" value="Descending">
            Descending
          </option>
        </select>
      </form>
      <form className="dropdown-sort">
        <label htmlFor="sortType"></label>
        <select
          name="sortType"
          id="card_sort_dd_select"
          onChange={handleTypeChange}
        >
          <option defaultValue key="1" value="">
            Sort Type
          </option>
          <option key="2" value="ID">
            ID
          </option>
          <option key="3" value="Likes">
            Likes
          </option>
          <option key="4" value="Alphabetically">
            Alphabetically
          </option>
        </select>
      </form>
    </>
  );
};

SortDropdown.propTypes = {
  updateSortOrder: PropTypes.func.isRequired,
  updateSortType: PropTypes.func.isRequired,
};

export default SortDropdown;
