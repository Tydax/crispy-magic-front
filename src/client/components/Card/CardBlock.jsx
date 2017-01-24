import React, { PropTypes } from 'react';

import CardPropTypes from '../../../shared/prop-types';
import CardButt from './CardButt';
import CardImage from './CardImage';
import CardName from './CardName';
import CardText from './CardText';

const propTypes = {
  card: PropTypes.shape(CardPropTypes).isRequired,
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
      <div className='card-block'>
        <CardImage imageUrl={this.props.cardimageUrl} name={this.props.cardname} />

        <div className='card-information'>
          <CardButt action={() => this.props.onClickAdd(this.props.card.id)} label="+" />
          <CardName name={this.props.cardname} colour={this.props.cardcolour} />
          {type}
          <CardText text={this.props.cardtext} />
        </div>
      </div>
    );
  }
}

CardBlock.propTypes = propTypes;

export default CardBlock;
