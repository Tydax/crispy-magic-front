import React, { PropTypes } from 'react';

import { capitalise } from '../../../shared/utils';

// Regex to check if string contains a number
const hasNumber = /\d/;

const generateCostItems = function generateCostItems(cost) {
  const costValues = cost.split(/{.*}/);

  return costValues.map((costValue, index) => {
    // true : Colourless mana, so just display the number
    // false : Colour mana, strip out '/' for double colour mana
    const costStr = hasNumber.test(costValue)
                  ? costValue
                  : capitalise(costValue.replace('/', ''));
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

CardCost.propTypes = {
  cost: PropTypes.string.isRequired,
};

export default CardCost;
