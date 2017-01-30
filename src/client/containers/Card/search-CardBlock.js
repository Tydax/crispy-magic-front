import { connect } from 'react-redux';

import { addCard } from '../../actions/card-actions';
import CardBlock from '../../components/Card/CardBlock';

const mapDispatchToProps = dispatch => ({
  onClickAdd: (containerToAdd, id) => dispatch(addCard(containerToAdd, id, 1)),
});

const SearchCardBlock = connect(null, mapDispatchToProps)(CardBlock);

export default SearchCardBlock;
