import React from "react";

const Dropdown = (props) => {
  const SortingOptions = [
    { label: "Card Id", value: "id" }, // default sorting style
    { label: "Alphabetically", value: "alpha" },
    { label: "Likes", value: "likes" },
  ];

  const sortCards = (input) => {
    props.sortingCardsCallback(input.target.value);
  };

  return (
    <div>
      <label>Sort: </label>
      <select onChange={sortCards}>
        {SortingOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
