import { connect } from 'react-redux';

import CardList from '../../components/Card/CardList';

const convertCards = (entities) => {
  const objs = entities.toJS();
  return Object.keys(objs).map(key => objs[key]);
};

const mapStateToProps = state => ({
  cards: convertCards(state.entities.get('cards')),
});

const DeckCardList = connect(mapStateToProps)(CardList);

export default DeckCardList;
