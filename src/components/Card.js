import React from "react";

const Card = (props) => {
  return (
    <div>
      <p>{props.card.message}</p>
      <ul>
        <li>{props.card.likes_count}</li>
        <li onClick={}>like button</li>
        <li onClick={}>delete button</li>
      </ul>
    </div>
  )
}