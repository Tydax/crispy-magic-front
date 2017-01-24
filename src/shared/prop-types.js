import { PropTypes } from 'react';

const CardPropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  colour: PropTypes.string,
  manaCost: PropTypes.string,
  numberCopies: PropTypes.number,
  rarity: PropTypes.string,
  imageUrl: PropTypes.string,
  text: PropTypes.string,
};

export {
  CardPropTypes,
};
