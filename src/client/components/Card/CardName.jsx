import React, { PropTypes } from 'react';

import { capitalise } from '../../../shared/utils';
import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  name: CardPropTypes.name.isRequired,
  colours: PropTypes.arrayOf(CardPropTypes.colour),
};

const defaultProps = {
  colours: ['colourless'],
};

const CardName = function CardName({ name, colours }) {
  // Display yellow if multiple colours
  const colour = colours.length > 1 ? 'Yellow' : colours[0];
  return (
    <h4 className={`name -${colour.toLowerCase()}`}>{name}</h4>
  );
};

CardName.propTypes = propTypes;
CardName.defaultProps = defaultProps;

export default CardName;
