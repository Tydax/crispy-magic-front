import React, { PropTypes } from 'react';

// Regex to check if string contains a number
const hasNumber = /\d/;

const generateCostItems = function generateCostItems(cost) {
  const costValues = cost.split(/{.*}/);

  return costValues.map(costValue => {
    // true : Colourless mana, so just display the number
    // false : Colour mana, strip out '/' for double colour mana
    const costStr = hasNumber.test(costValue)
                  ? costValue
                  : costValue.replace('/', '');
    const classStr = `cost-item mana small s${capitalise(costStr)}`;
    return <li className={classStr}></li>;
  });
};

const CardCost = function CardCost({ cost }) {
  return (
    <div className='mana-cost'>
      <ul className='cost-list'>
        {generateCostItems(cost)}
      </ul>
    </div>
  );
};

CardCost.propTypes = {
  cost: React.PropTypes.string.isRequired,
};

export default CardCost;
