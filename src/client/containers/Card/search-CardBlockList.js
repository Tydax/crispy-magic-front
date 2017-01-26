import { connect } from 'react-redux';

import CardBlockList from '../../components/Card/CardBlockList';

const convertCards = (entities) => {
  const objs = entities.toJS();
  return Object.keys(objs).map(key => objs[key]);
};

const mapStateToProps = state => ({
  cards: convertCards(state.entities.get('cards')),
});

const SearchCardBlockList = connect(mapStateToProps)(CardBlockList);

export default SearchCardBlockList;
