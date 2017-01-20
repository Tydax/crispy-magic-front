import React from 'react';

import { capitalise } from '../../../shared/utils';
import { CardPropTypes } from '../../../shared/prop-types';

const CardName = function CardName({ name, colour }) {
  return <h3 className={`name --${capitalise(colour)}`}>{name}</h3>;
};

CardName.propTypes = {
  name: CardPropTypes.name.isRequired,
  colour: CardPropTypes.colour.isRequired,
};

export default CardName;
