const LikeButton = (props) => {
  const likeThisCard = () => {
    props.likeCardCallback(props.cardID);
  };
  return <button onClick={likeThisCard}>🌻</button>;
};

export default LikeButton;
