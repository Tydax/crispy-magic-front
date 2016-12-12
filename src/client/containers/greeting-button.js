import { connect } from 'react-redux';
import Button from '../components/button';
import { sayHello } from '../actions/hello-actions';

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(sayHello()); },
  actionLabel: 'Say Hello',
});

export default connect(null, mapDispatchToProps)(Button);
