// requirements:
// Create a new card for the selected board by filling out a form
// Display an error message if invalid or incomplete information is provided
// Display all cards of a selected board
// Delete a card
// “+1” a card
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";

const Card = (props) => {
  return (
    <div className="Card">
      {/* <h2>Card</h2> */}
      <p>{props.message}</p>
      <p>Likes: {props.likes}</p>
      {/* <ul>
        <li>Message: {props.message}</li>
        <li>Likes: {props.likes}</li>
      </ul> */}
      <LikeButton
        likeCardCallback={props.likeCardCallback}
        cardID={props.cardID}
      ></LikeButton>
      <DeleteButton
        deleteCardCallback={props.deleteCardCallback}
        cardID={props.cardID}
      ></DeleteButton>
    </div>
  );
};

export default Card;
