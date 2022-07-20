const CardSortMenu = (props) => {
  const onSelectorChange = (event) => {
    props.cardSortCallback(event.target.value);
  };

  return (
    <div className="CardSortMenu">
      <label htmlFor="cardSortMethod">Sort Cards by: </label>
      <select
        name="cardSortMethod"
        id="cardSortMethod"
        onChange={onSelectorChange}
      >
        <option value="id">Card ID</option>
        <option value="message">Message</option>
        <option value="likes">Likes</option>
      </select>
    </div>
  );
};

export default CardSortMenu;
