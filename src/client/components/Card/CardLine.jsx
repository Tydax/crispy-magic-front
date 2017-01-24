import React, { PropTypes } from 'react';

import CardCopy from './CardCopy';
import CardCost from './CardCost';
import CardName from './CardName';
import CardButt from './CardButt';
import { capitalise } from '../../../shared/utils';
import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  card: PropTypes.shape(CardPropTypes).isRequired,
  onAddCopy: PropTypes.func.isRequired,
  onRemoveCopy: PropTypes.func.isRequired,
};

class CardLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='cardline-item'>
          {this.props.card.manaCost
            && <CardCost cost={this.props.card.manaCost} />}
          <CardName name={this.props.card.name} colours={this.props.card.colors} />
          <CardCopy numberCopies={this.props.card.numberCopies} rarity={this.props.card.rarity} />
          <CardButt action={() => this.props.onAddCopy(this.props.card.id)} variants={['-small', 'add-button']} label="+" />
          <CardButt action={() => this.props.onRemoveCopy(this.props.card.id)} variants={['-small', 'minus-button']} label="–" />
        </li>
      );
    }
};

CardLine.propTypes = propTypes;

export default CardLine;
