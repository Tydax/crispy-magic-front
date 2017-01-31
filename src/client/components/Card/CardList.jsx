import React, { PropTypes } from 'react';

import CardCategory from './CardCategory';
import { CardPropTypes } from '../../../shared/prop-types';
import { capitalise } from '../../../shared/utils';

const propTypes = {
  containerToAdd: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
  categories: PropTypes.arrayOf(React.PropTypes.string),
  deckName: PropTypes.string,
  onChangeDeckname: PropTypes.func,
};

const defaultProps = {
  cards: [],
  categories: ['creature', 'artefact&enchantment', 'land'],
  deckName: '',
};

class CardList extends React.Component {
  renderCategories() {
    return this.props.categories.map(category => {
      // Filter cards through categories
      const filters = category.split('&');
      const regex = new RegExp(filters.join('|'), 'i');
      const filteredCards = this.props.cards.filter(card => regex.test(card.types[0]));
      const title = capitalise(filters.join(' & '));

      return <CardCategory containerToAdd={this.props.containerToAdd} title={title} cards={filteredCards} key={category}/>;
    });
  }

  render() {
    const listCategories = this.renderCategories();
    return (
      <div className='card-list'>
        <input type="text" className='deckname'
          value={this.props.deckName}
          placeholder="Nom du deck"
          onChange={evt => onChangeDeckname(evt.target.value)}/>
        {listCategories}
      </div>
    );
  }
}

CardList.propTypes = propTypes;
CardList.defaultProps = defaultProps;

export default CardList;
