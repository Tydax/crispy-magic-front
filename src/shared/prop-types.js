import { PropTypes } from 'react';

const CardPropTypes = React.PropTypes.shape({
  name: CardName.propTypes.name,
  type: CardName.propTypes.type,
  colour: CardName.propTypes.colour,
  manaCost: React.PropTypes.shape(CardCost.propTypes),
  numberCopies: CardCopy.propTypes.numberCopies,
  rarity: CardCopy.propTypes.rarity,
});

export default {
  CardPropTypes,
};
