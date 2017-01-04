import React, { PropTypes } from 'react';

const CardCopy = function CardCopy({ numberCopies, rarity }) {
  return <span className={`nbcopies mtg${rarity.capitalize()}`}>{numberCopies}</span>;
};

CardCopy.propTypes = {
  numberCopies: React.PropTypes.number.isRequired,
  rarity: React.PropTypes.string.isRequired,
};

export default CardCopy;
