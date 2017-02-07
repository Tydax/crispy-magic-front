import { connect } from 'react-redux';

import CardList from '../../components/Card/CardList';
import { updateDeckName } from '../../actions/deck-actions';

const fetchEntityData = (state) => {
  const container = 'deckbuilder';
  const entityType = 'cards';
  const entityIds = state.containers.get(container).get('data').get(entityType).toJS();

  const entities = Object.keys(entityIds).map(id => {
    const card = state.entities.get(entityType).get(id).toJS();
    card.numberCopies = entityIds[id];
    return card;
  });
  return entities;
};

const mapStateToProps = state => ({
  cards: fetchEntityData(state),
  deckName: state.containers.get('deckbuilder').get('data').get('name'),
});

const mapDispatchToProps = dispatch => ({
  onChangeDeckname: value => dispatch(updateDeckName(value)),
});

const DeckCardList = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default DeckCardList;
