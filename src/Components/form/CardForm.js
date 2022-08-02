import React from "react";

//pass to cards page to render form then render suggetion dropdown inside
const CardForm = ({ onMessageChange, error, query, onChange }) => {
  return (
    <section className="form">
      ꒰ა ♡ ໒꒱ Create Card ✧･ﾟ: *✧･ﾟ:* 𓆩♡𓆪
      <form>
        <label>Title</label>
        <input
          type="text"
          onChange={onMessageChange}
          placeholder="Type a message..."
        />
        <label>{error ? <h4>Please type a message to continue</h4> : ""}</label>
        <hr />
        <label>Board</label>
        <input
          type="text"
          value={query}
          placeholder="Search Boards"
          onChange={onChange}
        />
        <button className="form-button">Add Card</button>
      </form>
    </section>
  );
};
