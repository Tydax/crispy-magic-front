import React, { PropTypes } from 'react';

import { capitalise } from '../../../shared/utils';
import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  cost: CardPropTypes.manaCost.isRequired,
};

// Regex to check if string contains a number
const hasNumber = /\d/;

const generateCostItems = function generateCostItems(cost) {
  const costValues = cost.match(/{([^{}]*)}+/g);
  return costValues.map((costValue, index) => {
    // true : Colourless mana, so just display the number
    // false : Colour mana, strip out '/' for double colour mana
    const strippedCost = costValue.replace(/[{}\/]/g, '');
    const costStr = hasNumber.test(costValue) ? strippedCost : strippedCost.toLowerCase();
    const classStr = `cost-item mana small s${costStr}`;
    return <li key={index} className={classStr}></li>;
  });
};

const CardCost = function CardCost({ cost }) {
  const costItems = generateCostItems(cost);
  return (
    <div className='mana-cost'>
      <ul className='cost-list'>
        {costItems}
      </ul>
    </div>
  );
};

CardCost.propTypes = propTypes;

export default CardCost;
