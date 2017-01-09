import React, { PropTypes } from 'react';

import { capitalise } from '../../../shared/utils';

const CardName = function CardName({ name, colour }) {
  return (
    <h6 className={`name mtg${capitalise(colour)}`}>{name}</h6>
  );
};

CardName.propTypes = {
  name: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
};

export default CardName;
