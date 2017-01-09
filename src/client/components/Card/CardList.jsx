import React, { PropTypes } from 'react';
import { List } from 'immutable';

import CardCategory from './CardCategory';
import { CardPropTypes } from '../../../shared/prop-types';
import { capitalise } from '../../../shared/utils';

const propTypes = {
  cards: PropTypes.object,
  categories: PropTypes.arrayOf(React.PropTypes.string),
};

const defaultProps = {
  cards: List(),
  categories: ['creature', 'artefact&enchantment'],
};

class CardList extends React.Component {
  renderCategories() {
    return this.props.categories.map(category => {
      // Filter cards through categories
      const filters = category.split('&');
      const regex = new RegExp(filters.join('|'), 'i');
      const filteredCards = this.props.cards.filter(card => regex.test(card.get('type')));
      const title = capitalise(filters.join(' & '));

      return <CardCategory title={title} cards={filteredCards} key={category}/>;
    });
  }

  render() {
    const listCategories = this.renderCategories();
    return (
      <div className='card-list'>
        {listCategories}
      </div>
    );
  }
}

CardList.propTypes = propTypes;
CardList.defaultProps = defaultProps;

export default CardList;
