import React, { PropTypes } from 'react';

import CardButt from './CardButt';
import CardImage from './CardImage';
import CardName from './CardName';
import CardText from './CardText';

const propTypes = {
  card: PropTypes.object.isRequired,
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
        <CardImage imageUrl={this.props.card.get('imageUrl')} name={this.props.card.get('name')} />

        <div className='card-information'>
          <CardButt action={() => this.props.onClickAdd(this.props.card.get('id'))} label="+" />
          <CardName name={this.props.card.get('name')} colour={this.props.card.get('colour')} />
          {type}
          <CardText text={this.props.card.get('text')} />
        </div>
      </div>
    );
  }
}

CardBlock.propTypes = propTypes;

export default CardBlock;
