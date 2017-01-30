import { connect } from 'react-redux';

import CardLine from '../../components/Card/CardLine';
import { addCard, removeCard } from  '../../actions/card-actions';

const mapDispatchToProps = dispatch => ({
  onAddCopy: (containerToAdd, id) => dispatch(addCard(containerToAdd, id, 1)),
  onRemoveCopy: (containerToAdd, id) => dispatch(removeCard(containerToAdd, id, 1)),
});

const AddableCardLine = connect(null, mapDispatchToProps)(CardLine);

export default AddableCardLine;
