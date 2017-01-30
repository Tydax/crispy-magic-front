import React, { PropTypes } from 'react';

import { CardPropTypes } from '../../../shared/prop-types';
import CardButt from './CardButt';
import CardImage from './CardImage';
import CardName from './CardName';
import CardText from './CardText';

const propTypes = {
  id: CardPropTypes.id,
  card: PropTypes.shape(CardPropTypes).isRequired,
  containerToAdd: PropTypes.string.isRequired,
  onClickAdd: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

const defaultProps = {
  compact: false,
}

class CardBlock extends React.Component {
  renderType() {
    const type = (
      <span className='type'>{this.props.card.type}</span>
    );

    return this.props.compact ? null : type;
  }

  render() {
    const type = this.renderType();
    return (
      <li className='card-block-item'>
        {this.props.card.multiverseid && <CardImage multiverseId={this.props.card.multiverseid} name={this.props.card.name} />}

        <div className='card-information'>
          <CardButt action={() => this.props.onClickAdd(this.props.containerToAdd, this.props.card.id)} label="+" />
          <CardName name={this.props.card.name} colours={this.props.card.colors || this.props.card.colorIdentity} />
          {type}
          <CardText text={this.props.card.text} />
        </div>
      </li>
    );
  }
}

CardBlock.propTypes = propTypes;

export default CardBlock;
