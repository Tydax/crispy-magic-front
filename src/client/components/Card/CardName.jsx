import React, { PropTypes } from 'react';

import { capitalise } from '../../../shared/utils';
import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  name: CardPropTypes.name.isRequired,
  colours: PropTypes.arrayOf(CardPropTypes.colour).isRequired,
};

const CardName = function CardName({ name, colours }) {
  // Display yellow if multiple colours
  const colour = colours.length > 1 ? 'Yellow' : colours[0];
  return (
    <h6 className={`name --${capitalise(colour)}`}>{name}</h6>
  );
};

CardName.propTypes = propTypes;

export default CardName;
