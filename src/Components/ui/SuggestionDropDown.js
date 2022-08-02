import React from "react";

//pass to cards page to render dropdown list of suggestions
const SuggestionDropDown = ({ options, query, onSearch }) => {
  return (
    <div className="cards-dropdown">
      <div className="dropdown-search" type="text">
        {options
          .filter((option) => {
            const searchTerm = query.toLowerCase();
            const title = option.title.toLowerCase();

            return searchTerm && title.includes(searchTerm);
          })
          .map((option) => {
            return (
              <div
                className="dropdown-row"
                key={option.id}
                onClick={() => onSearch(option.title)}
              >
                {option.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};
