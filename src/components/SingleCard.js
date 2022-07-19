import React from "react";
import PropTypes from "prop-types";

<<<<<<< HEAD
const SingleBoard = (props) => {
  console.log(props);
  return (
    <section>
      <ul>
        <li>{props.message}</li>
        <li>{props.likesCount}</li>
      </ul>
    </section>
  );
};

export default SingleBoard;
=======
const SingleCard = (props) => {
    return (
        <section>
            <ul>
            <li>{props.message}</li>
            <li>{props.likesCount}</li>
            </ul>
        </section>)
}

export default SingleCard;
>>>>>>> 7f2be5ae8f888f45f651df61e02898e12664e76a
