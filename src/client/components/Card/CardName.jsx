import React, { PropTypes } from 'react';

const CardName = function CardName({ name, colour }) {
  return (
    <h6 className={`name mtg${capitalise(colour)}`}>{name}</h6>
  );
};

CardName.propTypes = {
  name: React.PropTypes.string.isRequired,
  colour: React.PropTypes.string.isRequired,
};

export default CardName;
