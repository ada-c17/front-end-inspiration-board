import React from "react";
import "./CardList.css";
import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ data, setLikesCountCallBack, deleteCardCallBack }) => {
  // REMOVE FROM WHOEVER's PART THIS IS - DATA IS EACH CARD AND NOT A LIST OF CARDS
  //   const cardComponents = data.map((card) => (
  //     <Card
  //       key={card.id}
  //       id={card.id}
  //       message={card.message}
  //       likesCount={card.likesCount}
  //       setLikesCountCallback={setLikesCountCallBack}
  //       deleteCardCallBack={deleteCardCallBack}
  //     />
  //   ));

  //   return (
  //     <div>
  //       <h2 className="cardList"> List of Cards</h2>
  //       {cardComponents}
  //     </div>
  //   );
  // };

  return (
    <div>
      <h2 className="cardList"> List of Cards</h2>
      {
        <Card
          key={data.id}
          id={data.id}
          message={data.message}
          likesCount={data.likesCount}
          setLikesCountCallback={setLikesCountCallBack}
          deleteCardCallBack={deleteCardCallBack}
        />
      }
    </div>
  );
};

CardList.propTypes = {
  data: PropTypes.array.isRequired,
  setLikesCountCallBack: PropTypes.func.isRequired,
  deleteCardCallBack: PropTypes.func.isRequired,
};

export default CardList;
