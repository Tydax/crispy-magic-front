import React from 'react';

import { capitalise } from '../../../shared/utils';
import { CardPropTypes } from '../../../shared/prop-types';


const CardCopy = function CardCopy({ numberCopies, rarity }) {
  return <span className={`nbcopies mtg${capitalise(rarity)}`}>{numberCopies}</span>;
};

CardCopy.propTypes = {
  numberCopies: CardPropTypes.numberCopies.isRequired,
  rarity: CardPropTypes.rarity.isRequired,
};

export default CardCopy;
