import React, { PropTypes } from 'react';

import { capitalise } from '../../../shared/utils';

// Regex to check if string contaisn a number
const hasNumber = /\d/;

const generateCostItems = function generateCostItems(cost) {
  const costItems = [];
  const costValues = cost.split(/{.*}/);

  for (const costValue of costValues) {
    // true : Colourless mana, so just display the number
    // false : Colour mana, strip out '/' for double colour mana
    const costStr = hasNumber.test(costValue)
                  ? costValue
                  : costValue.replace('/', '');
    const classStr = `cost-item mana small s${capitalise(costStr)}`;
    costItems.push(() => <li className={classStr}></li>);
  }

  return costItems;
};

const CardCost = ({ cost }) => (
  <div className='mana-cost'>
    <ul className='cost-list'>
      {generateCostItems(cost)}
    </ul>
  </div>
);

CardCost.propTypes = {
  cost: React.PropTypes.string.isRequired,
};

const CardName = ({ name, colour }) => (
  <h6 className={`name mtg${capitalise(colour)}`}>{name}</h6>
);

CardName.propTypes = {
  name: React.PropTypes.string.isRequired,
  colour: React.PropTypes.string.isRequired,
};

const CardCopy = ({ numberCopies, rarity }) => (
  <span className={`nbcopies mtg${rarity.capitalize()}`}>{numberCopies}</span>
);

CardCopy.propTypes = {
  numberCopies: React.PropTypes.number.isRequired,
  rarity: React.PropTypes.string.isRequired,
};

const CardLine = ({ card }) => (
  <li className='cardline-item'>
    <CardCost cost={card.manaCost} />
    <CardName name={card.name} colour={card.colour} />
    <CardCopy numberCopies={card.numberCopies} rarity={card.rarity} />
  </li>
);

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
