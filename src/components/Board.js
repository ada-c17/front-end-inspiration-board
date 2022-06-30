export const Board = ({ id, title, owner, cards }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{owner}</p>
    </>
  );
};
