import React, { PropTypes } from 'react';

import CardCategory from './CardCategory';
import { CardPropTypes } from '../../../shared/prop-types';
import { capitalise } from '../../../shared/utils';

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
  categories: PropTypes.arrayOf(React.PropTypes.string),
  deckName: PropTypes.string.isRequired,
};

const defaultProps = {
  cards: [],
  categories: ['creature', 'artefact&enchantment', 'land'],
};

class CardList extends React.Component {
  renderCategories() {
    return this.props.categories.map(category => {
      // Filter cards through categories
      const filters = category.split('&');
      const regex = new RegExp(filters.join('|'), 'i');
      const filteredCards = this.props.cards.filter(card => regex.test(card.types[0]));
      const title = capitalise(filters.join(' & '));

      return <CardCategory title={title} cards={filteredCards} key={category}/>;
    });
  }

  render() {
    const listCategories = this.renderCategories();
    return (
      <div className='card-list'>
        <h2 className='deckname'>{this.props.deckName}</h2>
        {listCategories}
      </div>
    );
  }
}

CardList.propTypes = propTypes;
CardList.defaultProps = defaultProps;

export default CardList;
