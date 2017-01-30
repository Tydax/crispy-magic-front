import React, { PropTypes } from 'react';

import SearchCardBlock from '../../containers/Card/search-CardBlock';
import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
  containerToAdd: PropTypes.string.isRequired,
};

const defaultProps = {
  cards: [],
};

class CardBlockList extends React.Component {
  renderCardBlocks() {
    return this.props.cards.map(card => (
      <SearchCardBlock
        containerToAdd={this.props.containerToAdd}
        key={card.id}
        card={card}
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
