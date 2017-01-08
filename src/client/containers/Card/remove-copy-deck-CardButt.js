import { connect } from 'react-redux';

import CardButt from '../components/Card/CardButt';
import { REMOVE_CARD_COPY, removeCardCopy } from  '../actions/Card/CardButt-actions';

const mapDispatchToProps = dispatch => ({
  action: id => dispatch(removeCardCopy(id, 1)),
});

const RemoveCopyDeckButton = connect(null, mapDispatchToProps)(CardButt);

export default RemoveCopyDeckButton;
