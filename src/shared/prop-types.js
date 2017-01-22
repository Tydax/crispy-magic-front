import { PropTypes } from 'react';

const CardPropTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  colour: PropTypes.string,
  manaCost: PropTypes.string,
  numberCopies: PropTypes.number,
  rarity: PropTypes.string,
};

export {
  CardPropTypes,
};
