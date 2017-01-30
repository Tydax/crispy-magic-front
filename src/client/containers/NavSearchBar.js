import { connect } from 'react-redux';

import SearchBar from '../components/NavBar/SearchBar';
import { updateSearchValue } from '../actions/search-actions';
import { fetchEntities } from '../actions/entity-actions';

const mapStateToProps = state => ({
  value: state.search.get('value'),
});

const generateCriteria = (input) => {
  return {
    name: input,
  }
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (event, input) => {
    event.preventDefault();
    return dispatch(fetchEntities(
      'cards',
      generateCriteria(input),
      'search'));
  },
  onChangeValue: value => dispatch(updateSearchValue(value)),
});

const DeckCardList = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default DeckCardList;
