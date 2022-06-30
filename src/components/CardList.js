import React, { useState } from "react";
import PropTypes from "prop-types";

const CardList = () => {};

CardList.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddLike: PropTypes.func.isRequired,
  onDeleteCard: PropTypes.func.isRequired,
};

export default CardList;
