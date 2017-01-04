import React, { PropTypes } from 'react';

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

export default CardCost;
