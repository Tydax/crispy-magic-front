import { connect } from 'react-redux';

import CardLine from '../../components/Card/CardLine';
import { addCardCopy, removeCardCopy } from  '../../actions/card-actions';

const mapDispatchToProps = dispatch => ({
  onAddCopy: id => dispatch(addCardCopy(id, 1)),
  onRemoveCopy: id => dispatch(removeCardCopy(id, 1)),
});

const DeckCardLine = connect(null, mapDispatchToProps)(CardLine);

export default DeckCardLine;
