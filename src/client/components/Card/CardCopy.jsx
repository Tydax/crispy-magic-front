import React from 'react';

import { capitalise } from '../../../shared/utils';
import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  numberCopies: CardPropTypes.numberCopies,
  rarity: CardPropTypes.rarity.isRequired,
};

const defaultProps = {
  numberCopies: 1,
};

const CardCopy = function CardCopy({ numberCopies, rarity }) {
  return <span className={`nbcopies -${rarity.toLowerCase()}`}>{numberCopies}</span>;
};

CardCopy.propTypes = propTypes;
CardCopy.defaultProps = defaultProps;

export default CardCopy;
