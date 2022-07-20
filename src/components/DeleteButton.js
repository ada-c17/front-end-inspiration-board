const DeleteButton = (props) => {
  const deleteThisCard = () => {
    props.deleteCardCallback(props.cardID);
  };
  return <button onClick={deleteThisCard}>Delete</button>;
};

export default DeleteButton;
