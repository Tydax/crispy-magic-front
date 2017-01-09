import { PropTypes } from 'react';

import CardName from '../client/components/Card/CardName';
import CardCost from '../client/components/Card/CardCost';
import CardCopy from '../client/components/Card/CardCopy';

const CardPropTypes = {
  id: CardName.propTypes.number,
  name: CardName.propTypes.name,
  type: CardName.propTypes.type,
  colour: CardName.propTypes.colour,
  manaCost: CardCost.propTypes.cost,
  numberCopies: CardCopy.propTypes.numberCopies,
  rarity: CardCopy.propTypes.rarity,
};

export {
  CardPropTypes,
};
