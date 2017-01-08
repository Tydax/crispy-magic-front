import { connect } from 'react-redux';

import CardButt from '../components/Card/CardButt';
import { ADD_CARD_COPY, addCardCopy } from  '../actions/Card/CardButt-actions';

const mapDispatchToProps = dispatch => ({
  action: id => dispatch(addCardCopy(id, 1)),
});

const AddCopyDeckButton = connect(null, mapDispatchToProps)(CardButt);

export default AddCopyDeckButton;
