import React, { PropTypes } from 'react';
import { List } from 'immutable';

import DeckCardLine from '../../containers/Card/deck-CardLine';
import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  title: React.PropTypes.string.isRequired,
  cards: React.PropTypes.object,
};

const defaultProps = {
  cards: List(),
};

class CardCategory extends React.Component {
  renderItems() {
    return this.props.cards.map(card => <DeckCardLine card={card} key={card.get('id')}/>);
  }

  render() {
    const cardList = this.renderItems();
    return (
      <div className='category-list'>
        <h3 className='title'>{this.props.title}</h3>
        <ul className='cardline-list'>
          {cardList}
        </ul>
      </div>
    );
  }
};

CardCategory.propTypes = propTypes;
CardCategory.defaultProps = defaultProps;

export default CardCategory;
