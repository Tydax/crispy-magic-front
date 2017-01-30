import { connect } from 'react-redux';

import CardBlockList from '../../components/Card/CardBlockList';
import { fetchEntityData } from '../../../shared/utils';

const mapStateToProps = state => ({
  cards: fetchEntityData(state, 'search', 'cards'),
});

const SearchCardBlockList = connect(mapStateToProps)(CardBlockList);

export default SearchCardBlockList;
