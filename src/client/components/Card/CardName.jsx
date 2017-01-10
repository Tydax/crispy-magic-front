import React from 'react';

import { capitalise } from '../../../shared/utils';
import { CardPropTypes } from '../../../shared/prop-types';

const CardName = function CardName({ name, colour }) {
  return (
    <h6 className={`name mtg${capitalise(colour)}`}>{name}</h6>
  );
};

CardName.propTypes = {
  name: CardPropTypes.name.isRequired,
  colour: CardPropTypes.colour.isRequired,
};

export default CardName;
