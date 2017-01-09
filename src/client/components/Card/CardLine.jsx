import React, { PropTypes } from 'react';

import CardCopy from './CardCopy';
import CardCost from './CardCost';
import CardName from './CardName';
import CardButt from './CardButt';
import { capitalise } from '../../../shared/utils';
import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  card: React.PropTypes.object,
  onAddCopy: React.PropTypes.func.isRequired,
  onRemoveCopy: React.PropTypes.func.isRequired,
};

class CardLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='cardline-item'>
          <CardCost cost={this.props.card.get('manaCost')} />
          <CardName name={this.props.card.get('name')} colour={this.props.card.get('colour')} />
          <CardCopy numberCopies={this.props.card.get('numberCopies')} rarity={this.props.card.get('rarity')} />
          <CardButt action={() => this.props.onAddCopy(this.props.card.get('id'))} variants={['-small', 'add-button']} label="+" />
          <CardButt action={() => this.props.onRemoveCopy(this.props.card.get('id'))} variants={['-small', 'minus-button']} label="–" />
        </li>
      );
    }
};

CardLine.propTypes = propTypes;

export default CardLine;
