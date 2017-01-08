import React, { PropTypes } from 'react';

import CardCopy from './CardCopy';
import CardCost from './CardCost';
import CardName from './CardName';
import AddCopyDeckButton from '../../containers/Card/add-copy-deck-CardButt'
import RemoveCopyDeckButton from '../../containers/Card/remove-copy-deck-CardButt'
import { capitalise } from '../../../shared/utils';
import { CardPropTypes } from '../../../prop-types';

const propTypes = {
  card: CardPropTypes.isRequired,
};

class CardLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='cardline-item'>
          <CardCost cost={this.props.card.manaCost} />
          <CardName name={this.props.card.name} colour={this.props.card.colour} />
          <CardCopy numberCopies={this.props.card.numberCopies} rarity={this.props.card.rarity} />
          <AddCopyDeckButton variants={['-small', 'add-button']} label="+" />
          <RemoveCopyDeckButton variants={['-small', 'minus-button']} label="–" />
        </li>
      );
    }
};

CardLine.propTypes = propTypes;

export default CardLine;
