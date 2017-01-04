import React, { PropTypes } from 'react';

import CardCost from './CardCost';
import CardName from './CardName';
import CardCopy from './CardCopy';
import { capitalise } from '../../../shared/utils';

const CardLine = function CardLine({ card }) {
  return (
    <li className='cardline-item'>
      <CardCost cost={card.manaCost} />
      <CardName name={card.name} colour={card.colour} />
      <CardCopy numberCopies={card.numberCopies} rarity={card.rarity} />
    </li>
  );
};

CardLine.propTypes = {
  card: React.PropTypes.shape({
    name: CardName.propTypes.name,
    colour: CardName.propTypes.colour,
    manaCost: React.PropTypes.shape(CardCost.propTypes).isRequired,
    numberCopies: CardCopy.propTypes.numberCopies,
    rarity: CardCopy.propTypes.rarity,
  }).isRequired,
};

export default CardLine;
