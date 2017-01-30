import React, { PropTypes } from 'react';

import CardBlock from './CardBlock';
import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
};

const defaultProps = {
  cards: [],
};

class CardBlockList extends React.Component {
  renderCardBlocks() {
    return this.props.cards.map(card => (
      <CardBlock
        key={card.id}
        card={card}
        onClickAdd={id => alert(`ID de carte : ${id}`)}
        compact={false} />
    ));
  }

  render() {
    const cardBlocks = this.renderCardBlocks();
    return (
      <ul className='card-block-list'>
        {cardBlocks}
      </ul>
    )
  }
}

CardBlockList.propTypes = propTypes;
CardBlockList.defaultProps = defaultProps;

export default CardBlockList;
