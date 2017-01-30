import React, { PropTypes } from 'react';
import { List } from 'immutable';

import AddableCardLine from '../../containers/Card/addable-CardLine';
import { CardPropTypes } from '../../../shared/prop-types';

const propTypes = {
  containerToAdd: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape(CardPropTypes)),
};

const defaultProps = {
  cards: [],
};

class CardCategory extends React.Component {
  renderItems() {
    return this.props.cards.map(card => (<AddableCardLine
      containerToAdd={this.props.containerToAdd}
      card={card}
      key={card.id}/>
    ));
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
