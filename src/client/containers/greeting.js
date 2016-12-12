import { connect } from 'react-redux';
import Message from '../components/message';

const mapStateToProps = state => ({
  message: state.greeting.get('saidHello') ? 'Hello World!' : 'I did not say hello.',
});

export default connect(mapStateToProps)(Message);
