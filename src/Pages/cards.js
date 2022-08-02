import React, { useState } from "react";
import axios from "axios";
import "../Styles/animate.css";
import "../Styles/cardsdropdown.css";
import Candle from "../Images/candle.png";
import Incense from "../Images/incense.png";

const CardsPage = ({ options, boards, addCardToBoard }) => {
  //search query state
  const [query, setQuery] = useState("");
  const [cardFormData, setCardFormData] = useState({
    message: "",
  });

  const onMessageChange = (e) => {
    setCardFormData({
      ...cardFormData,
      message: e.target.value,
    });
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setQuery(searchTerm);
    boards.filter((board) => {
      if (board.title === searchTerm) {
        addCardToBoard({
          message: cardFormData.message,
          board_id: board.id,
        });
        postCardToBoard(board.id);
        return board.id;
      } else {
        return board;
      }
    });
  };

  const postCardToBoard = (id) => {
    return axios.post(
      `https://orange-purple-inspo-board.herokuapp.com/cards/${id}`,
      {
        message: cardFormData.message,
        likes_count: cardFormData.likes_count,
        board_id: id,
      }
    );
  };
  return (
    <div className="App">
      <section className="form-animate">
        <img src={Candle} alt="" width={80} height={80} />
        <img src={Incense} alt="" width={80} height={80} />
        <section className="form">
          ꒰ა ♡ ໒꒱ Create Card ✧･ﾟ: *✧･ﾟ:* 𓆩♡𓆪
          <form className="form-contents">
            <label className="label">Title</label>
            <input
              type="text"
              onChange={onMessageChange}
              placeholder="Type a message..."
              className="input"
            />
            <label className="label">Board</label>
            <input
              type="text"
              value={query}
              placeholder="Search Boards"
              onChange={onChange}
              className="input"
            />

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
                        // onClick={selectOption}
                      >
                        {option.title}
                      </div>
                    );
                  })}
              </div>
            </div>
            <button className="form-button">Add Card</button>
          </form>
        </section>
      </section>
    </div>
  );
};

export default CardsPage;
