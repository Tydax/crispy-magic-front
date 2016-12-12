import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const App = props => (
  <div>
    <p>Hello {props.name}!</p>
  </div>
);

App.propTypes = {
  name: PropTypes.string.isRequired,
};

const nameVar = 'world';

ReactDOM.render(<App name={nameVar} />, document.querySelector('.app'));
