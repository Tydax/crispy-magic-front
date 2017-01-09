import React, { PropTypes } from 'react';

import { capitalise } from '../../../shared/utils';

const CardCopy = function CardCopy({ numberCopies, rarity }) {
  return <span className={`nbcopies mtg${capitalise(rarity)}`}>{numberCopies}</span>;
};

CardCopy.propTypes = {
  numberCopies: React.PropTypes.number.isRequired,
  rarity: React.PropTypes.string.isRequired,
};

export default CardCopy;
