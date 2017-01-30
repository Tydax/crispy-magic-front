import { connect } from 'react-redux';

import CardBlockList from '../../components/Card/CardBlockList';

const getData = (container, state) => {
  const entityIds = state.containers.get(container).get('data').get('cards');
  const entities = entityIds.map(id => (
    state.entities.get('cards').get(id).toJS()
  ));
  return entities.toArray();
};

const mapStateToProps = state => ({
  cards: getData('search', state),
});

const SearchCardBlockList = connect(mapStateToProps)(CardBlockList);

export default SearchCardBlockList;
